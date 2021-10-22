import React from 'react'

export default function Experience() {
    return (
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
                        <img src="./images/filler.jpg" alt="" />
                    </div>
                    <div className="col-sm-12 col-md-4 right">
                        <div>
                            <p data-aos="fade-up">
                                PunkPortraits mobile app is the one thing you miss in the NFT
                                space. From now on you’ll never doubt what to do with your
                                NFT, where to check its rarity, or how to buy/sell.
                            </p>
                            <ul>
                                <li
                                    data-aos="fade-up"
                                    data-aos-offset="300"
                                    data-aos-duration="1000"
                                >
                                    Manage your NFT’s all in 1
                                </li>
                                <li
                                    data-aos="fade-up"
                                    data-aos-offset="300"
                                    data-aos-duration="1100"
                                >
                                    Check the rarity of all your NFT
                                </li>
                                <li
                                    data-aos="fade-up"
                                    data-aos-offset="300"
                                    data-aos-duration="1200"
                                >
                                    Discover new NFT projects
                                </li>
                                <li
                                    data-aos="fade-up"
                                    data-aos-offset="300"
                                    data-aos-duration="1300"
                                >
                                    Community holders will decide on media production, P2E game,
                                    and next projects that team will work on.
                                </li>
                            </ul>
                            <div
                                className="membership"
                                data-aos="fade-up"
                                data-aos-offset="300"
                                data-aos-duration="1400"
                            >
                                <div className="membership--images">
                                    <img src="./images/alien.png" alt="" />
                                    <img src="./images/head.png" className="fix" alt="" />
                                    <img src="./images/mujer.png" alt="" />
                                    <img src="./images/mono.png" alt="" />
                                    <img src="./images/zombie.png" alt="" />
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
    )
}
