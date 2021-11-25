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
                            "Monkeys, aliens, zombies, robots, men and women!" What are you 
                            going to get today? None look like each other because they are
                            unique, you can buy copies, however, the owner will put his 
                            signature on all of them. Who gives more! Bids will be 20 MATIC, yes! 
                            It's crazy! Come, come, come closer! Will you take a Polygon frame or 
                            a Ethereum one? Will you get an epic or rare? Hurry, because time is 
                            running out! It's foolish to wait, I know you are imagining the 
                            accessories that you will add to your artwork!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row even detail" data-aos="fade-up">
                    <div className="col-sm-12 col-md-5 offset-md-2 detail--content">
                        <div className="detail--inner">
                            <h4>The Artist</h4>
                            <p>
                             That is how the auction began. The banners were raised over and 
                             over again until all the portraits were purchased. People 
                             demonstrated their acquisitions, some received powerful 
                             foreigners, others found themselves in front of shy young people,
                             a few were amazed with exclusive access to the raffle of an 
                             interesting monetary sum or a coveted portrait.
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
                                4,000 Zombies &amp; Gorillas in total will be sold at 20 MATIC.
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
