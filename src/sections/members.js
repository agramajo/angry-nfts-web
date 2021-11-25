import React from 'react'

export default function Members() {
    return (
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
                        <img src="./images/1.jpg" alt="" />
                    </div>
                    <div className="data">
                        <h5>Kiorochi</h5>
                        <p>
                            Digital marketing geek by day, NFT enthusiast by night. I love
                            to read about new tech.
                        </p>
                    </div>
                    <div className="social">
                        {/* <a href="#" className="fab fa-twitter"></a> */}
                    </div>
                </div>
                <div className="item col-sm-12 col-md-2">
                    <div className="image">
                        <img src="./images/6.jpg" alt="" />
                    </div>
                    <div className="data">
                        <h5>NFTrevor</h5>
                        <p>
                            Competitive in every aspect of life. Hunting NFTs since
                            February.
                        </p>
                    </div>
                    <div className="social">
                        {/* <a href="#" className="fab fa-twitter"></a> */}
                    </div>
                </div>
                <div className="item col-sm-12 col-md-2">
                    <div className="image">
                        <img src="./images/2.jpg" alt="" />
                    </div>
                    <div className="data">
                        <h5>Chepe</h5>
                        <p>
                            Punk at night, Illustrator to pay the bills collecting NFTs is
                            my hobby.
                        </p>
                    </div>
                    <div className="social">
                        {/* <a href="#" className="fab fa-instagram"></a> */}
                    </div>
                </div>
                <div className="item col-sm-12 col-md-2">
                    <div className="image">
                        <img src="./images/7.jpg" alt="" />
                    </div>
                    <div className="data">
                        <h5>Ale</h5>
                        <p>
                            Software engineer with a passion for blockchain, DeFi and
                            innovation.
                        </p>
                    </div>
                    <div className="social">
                        {/* <a href="#" className="fab fa-linkedin"></a> */}
                    </div>
                </div>
                <div className="item col-sm-12 col-md-2">
                    <div className="image">
                        <img src="./images/3.jpg" alt="" />
                    </div>
                    <div className="data">
                        <h5>Brad</h5>
                        <p>Software engineer.</p>
                    </div>
                    <div className="social">
                        {/* <a href="#" className="fab fa-linkedin"></a> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
