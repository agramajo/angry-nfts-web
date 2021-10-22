import $ from "jquery";
import React, { useEffect } from 'react';

export default function Footer() {

    useEffect(() => {
        $(() => {
            const items = document.querySelectorAll("#faq .item");
            items.forEach((item, index) => {
                const title = item.querySelector(".item--title");
                const content = item.querySelector(".item--content");

                title.setAttribute("data-bs-target", `.faq-${index}`);
                content.classList.add(`faq-${index}`);
            });
        })
    }, [])

    return (
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
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
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
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
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
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
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
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
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
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
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
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
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
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
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
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>
                                <div className="item--content collapse">
                                    <p>
                                        A.
                                        <a
                                            href="https://twitter.com/aicryptopunks"
                                            title="PunkPortraits Twitter"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >twitter.com/aicryptopunks</a
                                        >
                                    </p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="item--title collapsed" data-bs-toggle="collapse">
                                    Q.How is your website?
                                    <button type="button" className="toggle">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>
                                <div className="item--content collapse">
                                    <p>
                                        A.
                                        <a href="https://punkportraits.com"
                                        >https://punkportraits.com</a
                                        >
                                    </p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="item--title collapsed" data-bs-toggle="collapse">
                                    Q. Will there be Giveaways?
                                    <button type="button" className="toggle">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
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
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
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
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
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
                        <a href="#discord" className="social--icon">
                            <i className="fab fa-discord"></i>
                        </a>
                        <a href="https://twitter.com/aicryptopunks" className="social--icon">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#instagram" className="social--icon">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#telegram" className="social--icon">
                            <i className="fab fa-telegram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
