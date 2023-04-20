import React from "react"
import { Controller, Scene } from 'react-scrollmagic';
import ParallaxImage from "../components/ParallaxImage";

import heroAboutImg from "../assets/pages/about/AboutUs.JPG";
import welcome from '../assets/pages/about/Welcome_to_Fuel_Fighter.JPG';
import handsOn from '../assets/pages/about/Hands_on_experience.JPG';
import impact1 from "../assets/pages/about/impact1.png";
import impact2 from "../assets/pages/about/impact2.png";
import impact3 from "../assets/pages/about/impact3.png";
import goal4 from "../assets/pages/about/goal4.png";
import goal7 from "../assets/pages/about/goal7.png";
import goal9 from "../assets/pages/about/goal9.png";
import goal11 from "../assets/pages/about/goal11.png";
import goal12 from "../assets/pages/about/goal12.png";
import goal13 from "../assets/pages/about/goal13.png";
import goal17 from "../assets/pages/about/goal17.png";

import videoAbout from '../assets/video/mainPageVideo.mp4';
import "../styles/pageStyles/about/about.css";

export default function About() {
    let duration = 500;
    return (
        <div id="aboutUs">
            <ParallaxImage image={heroAboutImg} title="About Us" height="100vh"/>
            <Controller>
            <Scene duration={1000} triggerHook="onCenter">
                {(progress) => (
                <div id="subtitleAboutUs" className="fullCentered" style={{ opacity: 1-progress}}>
                    <h2>Who We Are</h2>
                    <div id="whoWeAre">
                        <p>Fuel Fighter is a technical student organization at NTNU working with the goal of making the world’s most energy efficient electric car. For 13 years we have been competing in the world’s leading student competition on energy efficiency, the Shell Eco Marathon. With several accomplishments through the years, we are always competing for the first place in the Urban Concept battery electric class, as well as challenging the communication, innovation and design awards. The last two years we have also started developing an autonomous system for the car, for competing in the Shell Eco Marathon Autonomous competition.</p>
                        <video id="" width="100%" height="100%" src={videoAbout} controls autoPlay muted />
                    </div>
                </div>
                )}
                </Scene>
            </Controller>
            <div id="unGoals">
                <h1>UN Sustainable Development Goals</h1>
                <div id="motto">
                    <p>Our motto is “inspire for a sustainable future”. We want to show that working on a project can be done with an environmental mindset, and that the electric car is the future. With more focus on energy efficiency, electric cars can increase their range a lot more than what current models can achieve. To help stop the climate changes within 2030, we focus our work around seven of UN’s 17 sustainable development goals.</p>
                </div>
                <div id="unGoalsImg">
                    <a id="goals" href="https://sdgs.un.org/goals/goal4">
                        <img alt="Un Sustainable Development Goal 4" src={goal4} />
                        <div></div>
                    </a>
                    <a id="goals" href="https://sdgs.un.org/goals/goal7">
                        <img alt="Un Sustainable Development Goal 7" src={goal7} />
                    </a>
                    <a id="goals" href="https://sdgs.un.org/goals/goal9">
                        <img alt="Un Sustainable Development Goal 9" src={goal9} />
                    </a>
                    <a id="goals" href="https://sdgs.un.org/goals/goal11">
                        <img alt="Un Sustainable Development Goal 11" src={goal11} />
                    </a>
                    <a id="goals" href="https://sdgs.un.org/goals/goal12">
                        <img alt="Un Sustainable Development Goal 12" src={goal12} />
                    </a>
                    <a id="goals" href="https://sdgs.un.org/goals/goal13">
                        <img alt="Un Sustainable Development Goal 13" src={goal13} />
                    </a>
                    <a id="goals" href="https://sdgs.un.org/goals/goal17">
                        <img alt="Un Sustainable Development Goal 17" src={goal17} />
                    </a>
                </div>
            </div>
            
            <Controller>
                <Scene duration={duration} triggerHook="onEnter">
                    {(progress) => (

            <div className="aboutTxtImg"  style={{ opacity: progress }}>
                <div id="secondRowText" className="rowTextHalf">
                    <p>
                        Welcome to Fuel Fighter, a technical student organization at NTNU dedicated to designing and producing the world's most energy-efficient electric car. For over 13 years, we've been competing in the Shell Eco Marathon, the world's leading student competition on energy efficiency. Our team is comprised of more than 40 students from various fields of study at NTNU, including engineering, business, and design. We also have exchange students from countries like Spain, Germany, and France, adding an international dimension to our team.
                    </p>
                    <p>
                        Our goal is to create sustainable solutions that promote energy efficiency and innovation. We're constantly striving to improve our designs and techniques to produce the most efficient electric car possible. Our primary focus is the Urban Concept battery electric class, where we aim to achieve the highest energy efficiency possible. We also compete in other categories, including communication, innovation, and design awards.
                    </p>
                </div>
                <div id="secondRowImg">
                    <img src={welcome} alt="not defined"/>
                </div>
            </div>
            )}
                </Scene>
            </Controller>
            <Controller>
                <Scene duration={duration} triggerHook="onEnter">
                    {(progress) => (
                        <div id="aboutImpact" style={{ opacity: progress }}>
                            <h2>Our Impact</h2>
                                    
                                        <div id="theseImpacts">
                                            <ValueCard title="Inspire a sustainable future" img={impact1} subtitle="We optimize the car to let it be the most energy efficient as possible." />
                                            <ValueCard title="Connecting students" img={impact2} subtitle="We connect students from various engineering and business disciplines and create a network." />
                                            <ValueCard title="Developing innovative technology" img={impact3} subtitle="We inspire for new, innovative technology for electric cars." />
                                        </div>
                        </div>
                    )}
                </Scene>
            </Controller>
            <Controller>
                <Scene duration={duration} triggerHook="onEnter">
                    {(progress) => (
            <div className="aboutTxtImg" style={{ opacity: progress }}>
                <div id="fourthRowImg">
                    <img src={handsOn} alt="not defined"/>
                </div>
                <div id="fourthRowText" className="rowTextHalf">
                    <p>
                        At Fuel Fighter, we believe that teamwork and hands-on experience are crucial for success. We design and produce almost everything on our car ourselves, including PCB design, 3D modeling, and composite work. The students run every aspect of the organization, from financials and sponsorships to marketing and general organizational work. We're proud to offer our members the opportunity to develop practical skills that will be useful in their future careers.
                    </p>
                    <p>
                        Joining Fuel Fighter is an excellent way to gain hands-on experience, develop your teamwork and leadership skills, and contribute to a crucial cause. Whether you're an engineering student or have a passion for sustainability, we welcome all students who share our vision for a greener future. We're excited to work together to create change, one kilometer at a time.
                    </p>
                </div>
            </div>
            )}
                </Scene>
            </Controller>
        </div>
    )
}

const ValueCard = ({ img, title, subtitle }) => {
    return (
        <div className="valueCard">
            <img id="" alt={`${title} logo`} src={img} />
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>
    )
}