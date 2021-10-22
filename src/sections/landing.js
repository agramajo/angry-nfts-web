import $ from "jquery";
import React, { useEffect } from 'react';

export default function Landing() {

    useEffect(() => {
        $(() => {
            const carousels = document.querySelectorAll("#landing .carousel");

            carousels.forEach((carousel) => {
                const items = carousel.querySelectorAll("li");
                const wrapper = carousel.parentElement;

                for (let i = 0; i < items.length; i++) {
                    $(carousel).clone().prependTo($(wrapper));
                }
            });
        })
    }, [])

    return (
        <div>
            <section id="landing" className="landing container">
                <div className="row">
                    <div className="col-sm-12 col-lg-7">
                        <div className="connect">
                            <img src="./images/head.png" alt="" />
                            <div className="buttons">
                                <a href="#connect" className="btn btn-warning">Connect</a>
                                <a href="#mint" className="btn btn-success">Mint</a>
                            </div>
                        </div>
                        <div className="col-sm-12 progress-tracking">
                            <p>Minting Progress [00000/10000]</p>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: 0 }}
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
