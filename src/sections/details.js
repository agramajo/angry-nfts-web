import React from 'react'

export default function Details() {
    return (
        <section id="details">
            <div className="container">
                <div className="row odd detail" data-aos="fade-up">
                    <div className="col-sm-12 col-md-5 detail--image">
                        <img src="./images/hombre.png" alt="" />
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
                        <img src="./images/mujer.png" alt="" />
                    </div>
                </div>
                <div className="row odd detail" data-aos="fade-up">
                    <div className="col-sm-12 col-md-5 detail--image">
                        <img src="./images/mono.png" alt="" />
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
    )
}
