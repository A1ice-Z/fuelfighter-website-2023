import React, { useEffect } from 'react';

import sustainableFuture from '../../assets/pages/home/Inspire_a_sustainable_future.JPG'
import ourMission from '../../assets/pages/home/Our_Mission.JPG'
import ourGoals from '../../assets/pages/home/Our_Goals.JPG'
// import sponsorCar from '../../assets/pages/Sponsors/sponsors_car.jpg'

import '../../styles/pageStyles/home/homeAbout.css';

export default function HomeAbout() {
    const slideInLeftOptions = {
        rootMargin: '0px',
        threshold: 0.5
    };


    useEffect(() => {

        const homeSectionOne = document.querySelector('#homeSection1');
        const homeSectionSecond = document.querySelector('#homeSectionInverted');
        const homeSectionThird = document.querySelector('#homeSection3');

        const slideInLeftObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, slideInLeftOptions);

        slideInLeftObserver.observe(homeSectionOne);
        slideInLeftObserver.observe(homeSectionThird);
        slideInLeftObserver.observe(homeSectionSecond);

    }, [slideInLeftOptions]);
    return (
        <div className="homeAbout">
            <div className="homeSection slide-in-left" id="homeSection1">
                <div className="testoHomeSections">
                    <h1>Inspire a sustainable future</h1>
                    <p>We build the world's most energy-efficient electric car. Our car drives 30 times more energy-efficient than Tesla Model S.</p>
                </div>
                <div className="valuesImgContainer">
                    <img id="imgHomeAbout" className="come-in" alt="img values " src={sustainableFuture} />
                </div>
            </div>

            <div className="slide-in-right" id="homeSectionInverted">
                <div className="valuesImgContainer" >
                    <img id="imgHomeAboutInv" alt="img values " src={ourMission} />
                </div>
                <div className="testoHomeSections">
                    <h1>Our Mission</h1>
                    <p>To engage students in working as an engineering team, applying theory from their studies to practice, and building a sustainable future together.</p>
                    <p></p>
                </div>
            </div>

            <div className="homeSection slide-in-left" id="homeSection3">
                <div className="testoHomeSections">
                    <h1>Our Goals</h1>
                    <p>Driving towards a greener future. One kilometer at a time.</p>
                    <p></p>
                </div>
                <div className="valuesImgContainer">
                    <img id="imgHomeAbout" alt="img values " src={ourGoals} />
                </div>
            </div>
        </div>
    )
}