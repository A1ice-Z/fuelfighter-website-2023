import React from "react"

import "../styles/pageStyles/home/home.css"
import BlogPreview from "./home/BlogPreview.jsx";
import logo_white from "../assets/logo/logo_white.png"

import HeroHome from "./home/HeroMainPage";
import HomeAbout from "./home/HomeAbout";


export default function Home() {
    return (
        <div className="homeContainer" style={{position: 'relative'}}>
            <HeroHome />

            <HomeAbout/>
            
            <BlogPreview />

            <div className="applyField">
                <div id="apply">
                    <div className="fuelfighter-logo">
                        <img alt="Fuel Fighter logo" src={logo_white} width="64" />
                    </div>
                    <div className="applyText">
                        <h1>Apply for Fuel Fighter NTNU</h1>
                        <p>Fuel Fighter NTNU is a technical student organization at NTNU
                            working with the goal of making the world’s most energy
                            efficient electric car.</p>
                    </div>
                </div>
                <div id="apply-button">
                    <a className="button-suggested-action" href="./join">
                        <p className="rainbow_text_animated" style={{margin:0}}>Apply now</p>
                    </a>
                </div>
            </div>

        </div>
    )
}