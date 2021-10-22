import $ from "jquery";
import React, { useEffect } from 'react';

export default function Comingsoon() {

    useEffect(() => {
        $(() => {
            const carousels = document.querySelectorAll("#coming-soon .carousel");

            carousels.forEach((carousel) => {
                const items = carousel.querySelectorAll("li");
                const wrapper = carousel.parentElement;

                for (let i = 0; i < items.length; i++) {
                    $(carousel).clone().prependTo($(wrapper));
                }
            });
        })
    })

    return (
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
    )
}
