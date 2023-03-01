import React, { useState, /*useContext, useEffect*/ } from "react"
import '../styles/componentStyles/midheader.css'

import logoWhite from '../assets/logo/logo_white.png'
//import logoBlue from '../assets/logo/logo_blue.png'

// import { DarkModeContext } from "./DarkModeContext"

export default function Header({ path }) {
    const [menuView, setMenuView] = useState(false)
    // const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    const toggleDisplay = () => {
        setMenuView(!menuView)
    }

    //BLUE & WHITE HANDLED HERE ///////////////////////////////////////////////////////////////////////////
    // useEffect(()=>{
    //     document.documentElement.style.setProperty('--primary-color', !darkMode ? '#222f5c' : '#ffffff');
    //     document.documentElement.style.setProperty('--secondary-color', !darkMode ? '#ffffff' : '#222f5c');
    // }, [darkMode]);
    ///////////////////////////////////////////////////////////////////////////////////////////////////////

    // useEffect(()=>{
    //     const imag = document.getElementById("logoimg"); 
    //     imag.src = !darkMode ? logoBlue : logoWhite;
    // }, [darkMode]);

    return (
        <div className="fixed-top">
            <div className="row" id="upper-part" >
                <div className="row" id="header-innhold">
                    <div className="col-auto" id="logo-block">
                        <img id="logoimg" src={logoWhite} alt="fuel fighter logo" />
                        <a href="/"> Fuel Fighter</a>
                    </div>
                    <div className="col-auto" id="links">
                        <ul className="lenker">
                            <li><a href="/" className="">Home</a></li>
                            <li><a href="/blog" className="">Blog</a></li>
                            <li><a href="/about" className="">About</a></li>
                            <li><a href="/team" className="">Team</a></li>
                            <li><a href="/sponsors" className="">Sponsors</a></li>
                            <li><a href="/contact" className="">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="col-auto" id="sosiale-medier">
                        <div className="sosial-medie-lenker">
                            <li><a href="https://www.facebook.com/FuelFighterNTNU/" title="facebook" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-facebook"></i>
                            </a></li>
                            <li><a href="https://www.instagram.com/fuelfighter_ntnu/" title="instagram" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-instagram"></i>
                            </a></li>
                            <li><a href="https://www.youtube.com/user/EcoMarathonNTNU" title="youtube" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-youtube"></i>
                            </a></li>
                            <li><a href="https://www.linkedin.com/company/22290458/" title="linkedin" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-linkedin"></i>
                            </a></li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}