import React from "react"

import impact1 from "../assets/pages/about/impact1.png";
import impact2 from "../assets/pages/about/impact2.png";
import impact3 from "../assets/pages/about/impact3.png";

import right1 from "../assets/pages/about/aboutValue.jpg";

import  "../styles/pageStyles/about/about.css";

export default function About() {
    return(
        <div id="aboutUs">
            <div className="fullCentered">
                <div id="titleAboutUs">
                    <h1>About Us</h1>
                </div>
                <div id="subtitleAboutUs">
                    <h2>Who We Are</h2>
                    <p>Fuel Fighter is a technical student organization at NTNU working with the goal of making the world’s most energy efficient electric car. For 13 years we have been competing in the world’s leading student competition on energy efficiency, the Shell Eco Marathon. With several accomplishments through the years, we are always competing for the first place in the Urban Concept battery electric class, as well as challenging the communication, innovation and design awards. The last two years we have also started developing an autonomous system for the car, for competing in the Shell Eco Marathon Autonomous competition.</p>
                </div>
            </div>
            <div id="secondRowText" className="rowTextHalf">
                <p>
                    Our firm’s culture is rooted in our core principles. 
                </p>
                <p>
                    Here, you will join diverse and 
                </p>
                <p>
                    inclusive teams that support each other and
                </p>
                <p>
                    empower you to  do  your  best  work.
                </p>
            </div>
            <div id="secondRowImg">
                <img src={right1} />
            </div>
            <div id="aboutImpact">
                <h2>Our Impact</h2>
                <div id="theseImpacts">
                    <ValueCard title="Something something" img={impact1} subtitle="Through lending, investment and philanthropic capital, we’re supporting affordable housing and helping the underserved communities of today become flourishing communities tomorrow."/>
                    <ValueCard title="Environmental Sustainability" img={impact2} subtitle="Through lending, investment and philanthropic capital, we’re supporting affordable housing and helping the underserved communities of today become flourishing communities tomorrow."/>
                    <ValueCard title="Something something" img={impact3} subtitle="Through lending, investment and philanthropic capital, we’re supporting affordable housing and helping the underserved communities of today become flourishing communities tomorrow."/>
                </div>
            </div>
            <div id="fourthRowImg">
                <img src={right1} />
            </div>
            <div id="fourthRowText" className="rowTextHalf">
                <p>
                    Our firm’s culture is rooted in our core principles. 
                </p>
                <p>
                    Here, you will join diverse and 
                </p>
                <p>
                    inclusive teams that support each other and
                </p>
                <p>
                    empower you to  do  your  best  work.
                </p>
            </div>
        </div>
    )
}

const ValueCard = ({img, title, subtitle}) => {
    return(
        <div className="valueCard">
            <img id="" alt="Picture missing " src={img}/>
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>
    )
}