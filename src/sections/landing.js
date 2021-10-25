import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import myEpicNft from '../utils/PunksNFT.json';

// Constants
const TOTAL_MINT_COUNT = 4000;
const CONTRACT_ADDRESS = "0xF5656BC78042464Ef1CF5040aA3Ae8ac7d670f90";

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

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, myEpicNft.abi, signer);

        console.log("Going to pop wallet now to pay gas...")
        let nftTxn = await connectedContract.makeNFT({value: ethers.utils.parseEther("0.015")});

        console.log("Mining...please wait.")
        await nftTxn.wait();
        
        console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);

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
    return ( total / TOTAL_MINT_COUNT) * 100;
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
                                <div className="progress-value">0%</div>
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
