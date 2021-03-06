import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import myEpicNft from '../utils/PunksNFT3.json';

// Constants
const TOTAL_MINT_COUNT = 4000;
//const CONTRACT_ADDRESS = "0xF5656BC78042464Ef1CF5040aA3Ae8ac7d670f90";
//const CONTRACT_ADDRESS = "0x593628966a5D8E01d9b6D1D5eBf1b06e14Ae4963";
//const CONTRACT_ADDRESS = "0xf3296E5b7e9321fc88420034eCaaA17D6e96e929";
const CONTRACT_ADDRESS = "0xa779fB567Bc5d37a62b4D2CD836fECE4F72e96FF";

export default function Landing() {

  /*
  * Just a state variable we use to store our user's public wallet. Don't forget to import useState.
  */
  const [currentAccount, setCurrentAccount] = useState("");
  const [nftTotal, setNftTotal] = useState("")

  const checkIfWalletIsConnected = async () => {
    /*
    * First make sure we have access to window.ethereum
    */
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    getTotal();

    /*
    * Check if we're authorized to access the user's wallet
    */
    const accounts = await ethereum.request({ method: 'eth_accounts' });

    /*
    * User can have multiple authorized accounts, we grab the first one if its there!
    */
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
      //getTotal();
      setupEventListener();
    } else {
      console.log("No authorized account found")
    }
  }

  /*
  * Implement your connectWallet method here
  */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      /*
      * Fancy method to request access to account.
      */
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      /*
      * Boom! This should print out public address once we authorize Metamask.
      */
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
      setupEventListener();
    } catch (error) {
      console.log(error)
    }
  }

  // Setup our listener.
  const setupEventListener = async () => {
    // Most of this looks the same as our function askContractToMintNft
    try {
      const { ethereum } = window;

      if (ethereum) {
        // Same stuff again
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, myEpicNft.abi, signer);

        // THIS IS THE MAGIC SAUCE.
        // This will essentially "capture" our event when our contract throws it.
        // If you're familiar with webhooks, it's very similar to that!
        connectedContract.on("NewNFTMinted", (from, tokenId) => {
          console.log(from, tokenId.toNumber())
          alert(`We've minted an NFT!`)
        });

        console.log("Setup event listener!")

      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
  }

  const askContractToMintNft = async () => {
    try {
      const { ethereum } = window;

      let chainId = await ethereum.request({ method: 'eth_chainId' });
      console.log("Connected to chain " + chainId);

      /*
      const mumbaiChainId = "0x13881";
      if (chainId !== mumbaiChainId) {
        alert("You are not connected to the Mumbai Test Network!");
        return
      }
      */

      const maticChainId = "0x89";
      if (chainId !== maticChainId) {
        alert("You are not connected to the Polygon/Matic Network!");
        return
      }

      /*
      try {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x13881' }], // Hexadecimal version of 80001, prefixed with 0x
        });
      } catch (error) {
        if (error.code === 4902) {
          try {
            await ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: '0x13881', // Hexadecimal version of 80001, prefixed with 0x
                chainName: "POLYGON Mumbai",
                nativeCurrency: {
                  name: "MATIC",
                  symbol: "MATIC",
                  decimals: 18,
                },
                rpcUrls: ["https://speedy-nodes-nyc.moralis.io/cebf590f4bcd4f12d78ee1d4/polygon/mumbai"],
                blockExplorerUrls: ["https://explorer-mumbai.maticvigil.com/"],
                iconUrls: [""],

              }],
            });
          } catch (addError) {
            console.log('Did not add network');
          }
        }
      }
      */

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, myEpicNft.abi, signer);

        console.log("Going to pop wallet now to pay gas...")

        let nftTxn;

        try {
            nftTxn = await connectedContract.makeNFT({ value: ethers.utils.parseEther("20") });
        } catch (error) {
            if (error.code === -32603) {
                alert("You don't have enough MATIC!");
                return
            }
        }

        console.log("Mining...please wait.")
        await nftTxn.wait();

        console.log(`Mined, see transaction: ${nftTxn.hash}`);

      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function getTotal() {
    //
    // use provider to readonly
    //
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const nftContract = new ethers.Contract(CONTRACT_ADDRESS, myEpicNft.abi, provider);

    let total = await nftContract.totalSupply();
    console.log("total", total);

    setNftTotal(total.toNumber());
  }

  /*
  * This runs our function when the page loads.
  */
  useEffect(() => {
    checkIfWalletIsConnected();
  })

  /*
  * We added a simple onClick event here.
  */
  const renderNotConnectedContainer = () => (
    <a href="#connect" className="btn btn-warning" onClick={connectWallet}>Connect</a>
  );

  /*
  * We want the "Connect to Wallet" button to dissapear if they've already connected their wallet!
  */
  const renderMintUI = () => (
    <a href="#mint" className="btn btn-success" onClick={askContractToMintNft}>Mint</a>
  )

  const getPercentage = () => {
    const total = nftTotal !== "" ? nftTotal : 0;
    return ((total / TOTAL_MINT_COUNT) * 100) | 0;
  }

  const landingCarousel = () => {
    const carousels = document.querySelectorAll("#landing .carousel");

    carousels.forEach((carousel) => {
      const items = carousel.querySelectorAll("li");

      for (let i = 0; i < items.length; i++) {
        const clone = carousel.cloneNode(true);
        carousel.after(clone);
      }
    });
  };

  useEffect(() => {
    landingCarousel();
  });

  return (
    <div>
      <section id="landing" className="landing container">
        <div className="row">
          <div className="col-sm-12 col-lg-7">
            <div className="connect">
              <img src="./images/head.png" alt="" />
              <div className="buttons">
                {currentAccount === "" ? renderNotConnectedContainer() : renderMintUI()}
              </div>
            </div>
            <div className="col-sm-12 progress-tracking">
              <p>Price 20 MATIC</p>
              <p>Minting Progress [{nftTotal}/{TOTAL_MINT_COUNT}]</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${getPercentage()}%` }}
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
                <div className="progress-value">{getPercentage()} %</div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-lg-5">
            <div className="carousel--box">
              <div className="carousel--top carousel--container">
                <div className="carousel--wrapper">
                  <ul className="carousel">
                    <li>
                      <img alt="" className="carousel-image" src="./images/1.jpg" />
                    </li>
                    <li>
                      <img alt="" className="carousel-image" src="./images/2.jpg" />
                    </li>
                    <li>
                      <img alt="" className="carousel-image" src="./images/3.jpg" />
                    </li>
                    <li>
                      <img alt="" className="carousel-image" src="./images/4.jpg" />
                    </li>
                    <li>
                      <img alt="" className="carousel-image" src="./images/5.jpg" />
                    </li>
                  </ul>
                </div>
              </div>

              <div className="carousel--bottom carousel--container">
                <div className="carousel--wrapper">
                  <ul className="carousel">
                    <li>
                      <img alt="" className="carousel-image" src="./images/6.jpg" />
                    </li>
                    <li>
                      <img alt="" className="carousel-image" src="./images/7.jpg" />
                    </li>
                    <li>
                      <img alt="" className="carousel-image" src="./images/8.jpg" />
                    </li>
                    <li>
                      <img alt="" className="carousel-image" src="./images/9.jpg" />
                    </li>
                    <li>
                      <img alt="" className="carousel-image" src="./images/10.jpg" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
