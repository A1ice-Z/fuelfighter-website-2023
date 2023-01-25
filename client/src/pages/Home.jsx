import React, { useContext, useEffect} from "react"

import { DarkModeContext, blue, white } from "../components/DarkModeContext";

import "../styles/pageStyles/home/home.css"
// import BlogPreview from "./home/blogPreview";
import video from '../assets/video/mainPageVideo.mp4';
import imgValues from '../assets/pages/home/value1.jpg'

export default function Home() {
    const { darkMode } = useContext(DarkModeContext);
    useEffect(() => {
        let title = document.getElementById("homeTitle");
        title.style.color = darkMode ? blue : white;
        title.style.textShadow = `2px 2px 4px ${darkMode?white:blue}`;
    }, [darkMode]);

    return(
        <div className="homeContainer">
            <div className="homeFirst">
                <video src={video} controls={false} playing={true} autoPlay muted loop />
                <div id="homeTitle" className="homeTitle">
					<h1>Fuel Fighter NTNU</h1>
				</div>
            </div>
            <div className="homeAbout">
                <div id="homeSection">
                    <div className="testoHomeSections">
                        <h1>Inspire a sustainable future</h1>
                        <p>Our Motto</p>
                    </div>
                    <div className="valuesImgContainer">
                            <img id="imgHomeAbout" alt="img values " src={imgValues}/>
                    </div>
                </div>

                <div id="homeSectionInverted">
                    <div className="valuesImgContainer">
                            <img id="imgHomeAboutInv" alt="img values " src={imgValues}/>
                    </div>
                    <div className="testoHomeSections">
                        <h1>Our Mission</h1>
                        <p></p>
                        <p></p>
                    </div>
                </div>

                <div id="homeSection">
                    <div className="testoHomeSections">
                        <h1>Our Values</h1>
                        <p></p>
                        <p></p>
                    </div>
                    <div className="valuesImgContainer">
                            <img id="imgHomeAbout" alt="img values " src={imgValues}/>
                    </div>
                </div>
            </div>
            {/* <BlogPreview /> */}
        </div>
    )
}