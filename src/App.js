//import './styles/App.css';
import './styles/Poc.css';
import twitterLogo from './assets/twitter-logo.svg';
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import myEpicNft from './utils/PunksNFT.json';

// Constants
const OPENSEA_LINK = `https://testnets.opensea.io/collection/aicryptopunks`;
const TOTAL_MINT_COUNT = 100;
const CONTRACT_ADDRESS = "0xB4892Af635B947D7D35C9F0B785C93187b88C075";

const App = () => {

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

      //getTotal();
  
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
          alert(`We've minted your NFT and sent it to your wallet.`)
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
        let nftTxn = await connectedContract.makeNFT();

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

    let total = await nftContract.getTotal();
    console.log("total", total);    
    
    setNftTotal(total.toNumber());
  }

  /*
  * This runs our function when the page loads.
  */
  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  /*
  * We added a simple onClick event here.
  */
  const renderNotConnectedContainer = () => (
    <button onClick={connectWallet} className="cta-button connect-wallet-button">
      Connect to Wallet
    </button>
  );

  /*
  * We want the "Connect to Wallet" button to dissapear if they've already connected their wallet!
  */
  const renderMintUI = () => (
    <button onClick={askContractToMintNft} className="cta-button connect-wallet-button">
      Mint NFT
    </button>
  )


  /*
  * Added a conditional render! We don't want to show Connect to Wallet if we're already conencted :).
  */
  return (
<div className="App">
<div className="container">
  <title>PunkPortraits</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
  <nav id="site-nav" className="navbar navbar-expand-lg navbar-dark sticky-top">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="left">
            <h1>PunkPortraits</h1>
          </div>
          <div className="right">
            <button type="button" className="navbar-toggle collapsed" data-bs-toggle="collapse" data-bs-target=".main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div className="collapse navbar-collapse main-nav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="index.html#landing" aria-current="page" className="nav-link active">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="index.html#experience" aria-current="page" className="nav-link">
                    Experience
                  </a>
                </li>
                <li className="nav-item">
                  <a href="index.html#progress" aria-current="page" className="nav-link">
                    Join
                  </a>
                </li>
                <li className="nav-item">
                  <a href="index.html#details" aria-current="page" className="nav-link">
                    Details
                  </a>
                </li>
                <li className="nav-item">
                  <a href="index.html#roadmap" aria-current="page" className="nav-link">
                    Roadmap
                  </a>
                </li>
                <li className="nav-item">
                  <a href="index.html#members" aria-current="page" className="nav-link">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a href="index.html#faq" aria-current="page" className="nav-link">
                    FAQ
                  </a>
                </li>
              </ul>
              <div className="actions">
                <a href="index.html" className="btn btn-success disabled" data-bs-toggle="tooltip" data-bs-placement="bottom" title="The Public Sale starts on October 23 @ 4:30PM UTC">
                  BUY
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <main>
    <section id="landing" className="landing container">
      <div className="row">
        <div className="col-sm-12 col-lg-7">
          <div className="connect">
            <img src="dist/images/head.png" alt="" />
            <a href="index.html#" className="btn btn-warning btn-connect">Connect</a>
          </div>
          <div className="col-sm-12 progress-tracking">
            <p>Minting Progress [00000/10000]</p>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
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
                    <img className="carousel-image" src="dist/images/1.jpg" />
                  </li>
                  <li>
                    <img className="carousel-image" src="dist/images/2.jpg" />
                  </li>
                  <li>
                    <img className="carousel-image" src="dist/images/3.jpg" />
                  </li>
                  <li>
                    <img className="carousel-image" src="dist/images/4.jpg" />
                  </li>
                  <li>
                    <img className="carousel-image" src="dist/images/5.jpg" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="carousel--bottom carousel--container">
              <div className="carousel--wrapper">
                <ul className="carousel">
                  <li>
                    <img className="carousel-image" src="dist/images/6.jpg" />
                  </li>
                  <li>
                    <img className="carousel-image" src="dist/images/7.jpg" />
                  </li>
                  <li>
                    <img className="carousel-image" src="dist/images/8.jpg" />
                  </li>
                  <li>
                    <img className="carousel-image" src="dist/images/9.jpg" />
                  </li>
                  <li>
                    <img className="carousel-image" src="dist/images/10.jpg" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="experience" className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col title">
            <h2 data-aos="fade-up">
              Best Mobile App for the real PunkPortraits hodlers
            </h2>
            <p data-aos="fade-up">Coming in Dec 2021</p>
          </div>
        </div>
        <div className="row content">
          <div className="col-sm-8 offset-sm-2 col-md-4 offset-md-2 left">
            <img src="dist/images/filler.jpg" alt="" />
          </div>
          <div className="col-sm-12 col-md-4 right">
            <div>
              <p data-aos="fade-up">
                PunkPortraits mobile app is the one thing you miss in the NFT
                space. From now on you’ll never doubt what to do with your
                NFT, where to check its rarity, or how to buy/sell.
              </p>
              <ul>
                <li data-aos="fade-up" data-aos-offset={300} data-aos-duration={1000}>
                  Manage your NFT’s all in 1
                </li>
                <li data-aos="fade-up" data-aos-offset={300} data-aos-duration={1100}>
                  Check the rarity of all your NFT
                </li>
                <li data-aos="fade-up" data-aos-offset={300} data-aos-duration={1200}>
                  Discover new NFT projects
                </li>
                <li data-aos="fade-up" data-aos-offset={300} data-aos-duration={1300}>
                  Community holders will decide on media production, P2E game,
                  and next projects that team will work on.
                </li>
              </ul>
              <div className="membership" data-aos="fade-up" data-aos-offset={300} data-aos-duration={1400}>
                <div className="membership--images">
                  <img src="dist/images/alien.png" alt="" />
                  <img src="dist/images/head.png" className="fix" alt="" />
                  <img src="dist/images/mujer.png" alt="" />
                  <img src="dist/images/mono.png" alt="" />
                  <img src="dist/images/zombie.png" alt="" />
                </div>
                <strong> Exclusive membership </strong>
                <p>
                  PunkPortraits hodlers will have unlimited premium access to
                  everything in our Club App forever
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="progress">
      <div className="container">
        <div className="row">
          <div className="col-sm-12" data-aos="fade-up" data-aos-duration={1800}>
            <div className="progress--content">
              <h2>PunkPortraits is The project you've been waiting for...</h2>
              <p>
                Minting Process in October! Check our collection on OpenSea!
              </p>
              <a href="index.html#" className="btn btn-success btn-lg btn-open-sea">
                OpenSea
              </a>
              <p>
                PunkPortraits is a community-oriented project where members
                vote on future development of the project.
              </p>
              <p>
                Beta play to earn in december for holders!! in december for
                holders!!
              </p>
              <p>
                The Public Sale starts on
                <strong>October 23 @ 4:30PM UTC</strong>. The mint price will
                be 0.01ETH. For more details about our main sale, join us on
                Discord .
              </p>
              <div className="actions">
                <a href="index.html#" className="btn btn-danger btn-lg"> Join Discord </a>
                <a href="https://twitter.com/aicryptopunks" className="btn btn-primary btn-lg">
                  Check Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="details">
      <div className="container">
        <div className="row odd detail" data-aos="fade-up">
          <div className="col-sm-12 col-md-5 detail--image">
            <img src="dist/images/hombre.png" alt="" />
          </div>
          <div className="col-sm-12 col-md-5 detail--content">
            <div className="detail--inner">
              <h4>The Story</h4>
              <p>
                The year is 2077, humanity is gone and the zombies have
                overrun the cities and seized a lot of the military
                stockpiles. However, they didn’t count on the genetically
                enhanced ferocity and cunning traits of the gorilla regime.
                The Gorilla oasis stronghold is under attack but they will
                never surrender.
              </p>
            </div>
          </div>
        </div>
        <div className="row even detail" data-aos="fade-up">
          <div className="col-sm-12 col-md-5 offset-md-2 detail--content">
            <div className="detail--inner">
              <h4>The Artist</h4>
              <p>
                George Trosley has been a Hustler Magazine cartoonist for over
                30+ years. His work speaks for itself with its sharp, unique
                and in your face attitude in his pieces. Expect the same with
                this project.
              </p>
              <p>
                Every single Freak and trait you see has been 100% hand drawn
                in Trosley’s studio (with no assistance from AI or computers).
                Once sketched, the trait is inked and then colored with
                markers, color pencils, etc. The physical pieces are then
                scanned, white space removed and positioned for your viewing
                pleasure.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-5 detail--image">
            <img src="dist/images/mujer.png" alt="" />
          </div>
        </div>
        <div className="row odd detail" data-aos="fade-up">
          <div className="col-sm-12 col-md-5 detail--image">
            <img src="dist/images/mono.png" alt="" />
          </div>
          <div className="col-sm-12 col-md-5 detail--content">
            <div className="detail--inner">
              <h4>The Plan</h4>
              <p>
                10,000 Zombies &amp; Gorillas in total will be sold at .07 ETH.
                The price will not increase/decrease during the course of the
                sale to remain fair. There will be a whitelist available for
                early supporters before the main sale. There are over 200+
                traits in this collection and each freak will be generated to
                maintain authenticity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="roadmap">
      <div className="top" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 left">
              <h4>Roadmap</h4>
              <p>
                We have big plans and ideas for our community, so join us on
                our quest to make this one of the best NFT projects around.
              </p>
              <p>
                We envision PunkPortraits to become a heavily involved and fun
                project for everyone. Below is a short-term map of milestones
                to unlock the full potential of PunkPortraits.
              </p>
              <p>
                Future roadmaps will be developed with the community holders.
              </p>
            </div>
            <div className="col-sm-12 col-md-6 right">
              <img src="dist/images/alien.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row bottom">
          <div className="block" data-aos="fade-up">
            <div className="block--heading">25%</div>
            <ul className="block--body">
              <li>
                3 PP reserved from the sale will be airdropped to random
                PunkPortraits holders.
              </li>
              <li>
                10 ETH send to PunkPortraits Treasure. This will also be used
                in our P2E game to be launched in Roadmap 2.0.
              </li>
              <li>
                We will raffle 5 ETH to early supporters and verified
                PunkPortraits owners.
              </li>
            </ul>
          </div>
          <div className="block" data-aos="fade-up">
            <div className="block--heading">50%</div>
            <ul className="block--body">
              <li>
                10 ETH from sales will go into a community pool that will be
                used for prizes.
              </li>
              <li>
                10 ETH to PP Treasury. Funds will be used to initiate
                liquidity staking pool (stake NFT, earn ETH).
              </li>
              <li>
                5 ETH used to sweep the floor on OpenSea (strategically).
              </li>
            </ul>
          </div>
          <div className="block" data-aos="fade-up">
            <div className="block--heading">75%</div>
            <ul className="block--body">
              <li>
                Buy a Parcel Of Land In Decentraland to host our events and
                game.
              </li>
              <li>
                5 ETH reserved from the sale will be airdropped to random
                PunkPortraits holders.
              </li>
              <li>
                10 ETH send to PunkPortraits Treasure to invest in
                Decentraland game development.
              </li>
            </ul>
          </div>
          <div className="block" data-aos="fade-up">
            <div className="block--heading">100%</div>
            <ul className="block--body">
              <li>Start Development P2E Game in Decentraland.</li>
              <li>Exclusive PP merch store launched.</li>
              <li>
                One Lucky PP holder will win the first Jackpot of 5 ETH. PP
                members will have some time after sell out to collect the
                necessary Lucky Portraits.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="coming-soon" data-aos="fade-up">
      <div className="carousel--box">
        <div className="carousel--container">
          <div className="carousel--wrapper">
            <ul className="carousel">
              <li>Public Sale starts on October 20&nbsp;-&nbsp;</li>
              <li>Public Sale starts on October 20&nbsp;-&nbsp;</li>
              <li>Public Sale starts on October 20&nbsp;-&nbsp;</li>
              <li>Public Sale starts on October 20&nbsp;-&nbsp;</li>
              <li>Public Sale starts on October 20&nbsp;-&nbsp;</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="members" className="container-fluid">
      <div className="row title" data-aos="fade-up">
        <div className="col">
          <h4>PP Team Members</h4>
          <p>
            PunkPortraits is a project made by a team of close real-life
            friends, consisting of NFT collectors &amp; enthusiasts, marketing
            geeks, an outstanding street artist moving to this new space, and
            Ethereum blockchain.
          </p>
        </div>
      </div>
      <div className="row items" data-aos="fade-up">
        <div className="item col-sm-12 col-md-2 offset-md-1">
          <div className="image">
            <img src="dist/images/1.jpg" alt="" />
          </div>
          <div className="data">
            <h5>Kiorochi</h5>
            <p>
              Digital marketing geek by day, NFT enthusiast by night. I love
              to read about new tech.
            </p>
          </div>
          <div className="social">
            {/* <a href="#" class="fab fa-twitter"></a> */}
          </div>
        </div>
        <div className="item col-sm-12 col-md-2">
          <div className="image">
            <img src="dist/images/6.jpg" alt="" />
          </div>
          <div className="data">
            <h5>NFTrevor</h5>
            <p>
              Competitive in every aspect of life. Hunting NFTs since
              February.
            </p>
          </div>
          <div className="social">
            {/* <a href="#" class="fab fa-twitter"></a> */}
          </div>
        </div>
        <div className="item col-sm-12 col-md-2">
          <div className="image">
            <img src="dist/images/2.jpg" alt="" />
          </div>
          <div className="data">
            <h5>Chepe</h5>
            <p>
              Punk at night, Illustrator to pay the bills collecting NFTs is
              my hobby.
            </p>
          </div>
          <div className="social">
            {/* <a href="#" class="fab fa-instagram"></a> */}
          </div>
        </div>
        <div className="item col-sm-12 col-md-2">
          <div className="image">
            <img src="dist/images/7.jpg" alt="" />
          </div>
          <div className="data">
            <h5>Ale</h5>
            <p>
              Software engineer with a passion for blockchain, DeFi and
              innovation.
            </p>
          </div>
          <div className="social">
            {/* <a href="#" class="fab fa-linkedin"></a> */}
          </div>
        </div>
        <div className="item col-sm-12 col-md-2">
          <div className="image">
            <img src="dist/images/3.jpg" alt="" />
          </div>
          <div className="data">
            <h5>Brad</h5>
            <p>Software engineer.</p>
          </div>
          <div className="social">
            {/* <a href="#" class="fab fa-linkedin"></a> */}
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer id="faq">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4 left">
          <h4>Frequently asked question</h4>
          <p>
            AiCryptoPunks is now PunkPortraits. We know you have a lot of
            questions! This channel will be updated regularly and we hope to
            give you all the answers quickly.
          </p>
        </div>
        <div className="col-sm-12 col-md-8 right">
          <div className="items-wrapper">
            <div className="item">
              <div className="item--title collapsed" data-bs-toggle="collapse">
                Q. When are we launching?
                <button type="button" className="toggle">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="item--content collapse">
                <p>A. October 2021 - Official date to be announced soon</p>
              </div>
            </div>
            <div className="item">
              <div className="item--title collapsed" data-bs-toggle="collapse">
                Q. What's the PunkPortraits mint price?
                <button type="button" className="toggle">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="item--content collapse">
                <p>A. 0.015 ETH</p>
              </div>
            </div>
            <div className="item">
              <div className="item--title collapsed" data-bs-toggle="collapse">
                Q.How can i buy?
                <button type="button" className="toggle">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="item--content collapse">
                <p>
                  A.You will need to have MetaMask installed and set up (If
                  you don't know what MetaMask is or how to install it, please
                  visit MetaMask for instructions). In order to buy, connect
                  with your wallet and use the minting interface to select how
                  many Charizlord you want to get. Click the shiny mint
                  button, approve the transaction on MetaMask and watch
                  PunkPortraits show into your wallet!
                </p>
              </div>
            </div>
            <div className="item">
              <div className="item--title collapsed" data-bs-toggle="collapse">
                Q. What is the goal?
                <button type="button" className="toggle">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="item--content collapse">
                <p>
                  A. Our goal is to produce a fair launch project with a high
                  level of design and detail so that we can provide quality to
                  everyone.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="item--title collapsed" data-bs-toggle="collapse">
                Q. Is there a pre-launch / pre-mint?
                <button type="button" className="toggle">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="item--content collapse">
                <p>
                  A. Yes! There will be a limited access pre-mint before the
                  initial drop to reward early community members. Please check
                  our announcement channel for more information.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="item--title collapsed" data-bs-toggle="collapse">
                Q. Is there a limit to purchases?
                <button type="button" className="toggle">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="item--content collapse">
                <p>A. No limit</p>
              </div>
            </div>
            <div className="item">
              <div className="item--title collapsed" data-bs-toggle="collapse">
                Q. How many PunkPortraits will be alive?
                <button type="button" className="toggle">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="item--content collapse">
                <p>A. 10,010</p>
              </div>
            </div>
            <div className="item">
              <div className="item--title collapsed" data-bs-toggle="collapse">
                Q. How do I access the PunkPortraits Twitter page?
                <button type="button" className="toggle">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="item--content collapse">
                <p>
                  A.
                  <a href="https://twitter.com/aicryptopunks" title="PunkPortraits Twitter" target="_blank">twitter.com/aicryptopunks</a>
                </p>
              </div>
            </div>
            <div className="item">
              <div className="item--title collapsed" data-bs-toggle="collapse">
                Q.How is your website?
                <button type="button" className="toggle">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="item--content collapse">
                <p>
                  A.
                  <a href="index.html">https://punkportraits.com</a>
                </p>
              </div>
            </div>
            <div className="item">
              <div className="item--title collapsed" data-bs-toggle="collapse">
                Q. Will there be Giveaways?
                <button type="button" className="toggle">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="item--content collapse">
                <p>
                  A. Yes! 150 AiCryptoPunks will be reserved for this sole
                  purpose.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="item--title collapsed" data-bs-toggle="collapse">
                Q.Which PunkPortraits set is ultra rare?
                <button type="button" className="toggle">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="item--content collapse">
                <p>
                  A. Ultra Rare PunkPortraits NFT are able to move around,
                  yes! the punk is watching you.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="item--title collapsed" data-bs-toggle="collapse">
                Q. will be a play to earn game?
                <button type="button" className="toggle">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="item--content collapse">
                <p>
                  A. Yes, we are currently working on it, more details will be
                  announced after minting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col social">
          <a href="index.html#" className="social--icon">
            <i className="fab fa-discord" />
          </a>
          <a href="https://twitter.com/aicryptopunks" className="social--icon">
            <i className="fab fa-twitter" />
          </a>
          <a href="index.html#" className="social--icon">
            <i className="fab fa-instagram" />
          </a>
          <a href="index.html#" className="social--icon">
            <i className="fab fa-telegram" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</div>
</div>
);
};

export default App;
