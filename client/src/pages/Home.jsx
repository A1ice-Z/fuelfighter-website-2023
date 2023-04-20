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
                        <p className="" style={{margin:0}}>Apply now</p>
                    </a>
                </div>
            </div>
                {/* <iframe width="500" height="300" src="https://www.instagram.com/p/CrOHVLbPKoh/embed" frameborder="0"></iframe> */}
                <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '5vh'}}>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7033147725437112320" scrolling="no" height="380" width="454" frameborder="0" allowfullscreen="false" title="Embedded post"></iframe>
                    <iframe src="https://www.instagram.com/p/CrOHVLbPKoh/embed" height={470} scrolling="no" ></iframe>

                    <iframe
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFuelFighterNTNU%2Fposts%2Fpfbid02KxZ6aZwdVmNK96yaa4rUyr2tHEou8jGjfBoUciuB1JsqSGpu5nGyYEpifRh8Jmkwl&show_text=true&width=500"
                    width="500"
                    height="450"
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    frameborder="0"
                    allowfullscreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>    
                </div>
        </div>
    )
}