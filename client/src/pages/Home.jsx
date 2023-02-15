import React, { useState } from "react"

import "../styles/pageStyles/home/home.css"
// import BlogPreview from "./home/blogPreview";
import imgValues from '../assets/pages/home/value1.jpg'

import HeroHome from "./home/HeroMainPage";

export default function Home() {
    return(
        <div className="homeContainer">
            <HeroHome />
            <div className="homeAbout">
                <div id="homeSection">
                    <div className="testoHomeSections">
                        <h1>Inspire a sustainable future</h1>
                        <p>Our Motto and Values</p>
                    </div>
                    <div className="valuesImgContainer">
                        <img id="imgHomeAbout" alt="img values " src={imgValues} />
                    </div>
                </div>

                <div id="homeSectionInverted">
                    <div className="valuesImgContainer">
                        <img id="imgHomeAboutInv" alt="img values " src={imgValues} />
                    </div>
                    <div className="testoHomeSections">
                        <h1>Our Mission</h1>
                        <p>to make things sustainable</p>
                        <p></p>
                    </div>
                </div>

                <div id="homeSection">
                    <div className="testoHomeSections">
                        <h1>Our Goals</h1>
                        <p>Fn-målene</p>
                        <p></p>
                    </div>
                    <div className="valuesImgContainer">
                        <img id="imgHomeAbout" alt="img values " src={imgValues} />
                    </div>
                </div>
            </div>
            {/* <BlogPreview /> */}

            <div id="applyField">
                <div className="upper-part">
                    <img alt="Fuel Fighter logo" src="https://www.fuelfighter.no/static/media/logo_black.352579201a5ee3025768.png" width="64" />
                    <img alt="Fuel Fighter logo" src="https://www.fuelfighter.no/static/media/logo_black.352579201a5ee3025768.png" width="64" />

                    <h2>Apply for Fuel Fighter NTNU</h2>
                    <p>Fuel Fighter NTNU is a technical student organization at NTNU working with the goal of making the world’s most energy efficient electric car.</p>
                    <a className="button suggested-action" href="./join">Apply now</a>
                </div>
            </div>

        </div>
    )
}