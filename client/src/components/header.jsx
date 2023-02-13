import React, { useState, useContext, useEffect} from "react"
import '../styles/componentStyles/header.css'

import logoWhite from '../assets/logo/logo_white.png'
import logoBlue from '../assets/logo/logo_blue.png'

// import { DarkModeContext } from "./DarkModeContext"

export default function Header({path}) {
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

    return(
        <div className="fixed-top">
            <div className="header" id="headerBackground">
                <div></div>
                <a href="/" className="d-flex align-items-center justify-content-center col-md-1 mb-2 mb-md-0 text-decoration-none">
                    {/* <img id="logoimg" /> */}
                    <img id="logoimg" src = {logoWhite} />
                </a>
                <a href="/" className="d-flex justify-content-center" id="titleHeader">Fuel Fighter</a>
                
                <div className="d-flex justify-content-center col-12" id="menuDisplay" onClick={toggleDisplay}>
                    <i className="bi bi-list" id="menu"></i>
                </div>
                
                <ul className="nav col-12 col-md-auto mb-2 justify-content-end mb-md-0">
                    {/* <li onClick={() => toggleDarkMode()}>
                        {darkMode ? <i className="bi bi-moon-fill"></i> : <i className="bi bi-sun-fill"></i>}
                    </li> */}
                </ul>

                <ul className="nav col-md-0 justify-content-center text-end">
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
                </ul>
            </div>
            {menuView ?
                <div className="headMenu" id="menuDropdown">
                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0" id="menuBar">
                        <li><a href="/" className="">Home</a></li>
                        <li><a href="/blog" className="">Blog</a></li>
                        <li><a href="/about" className="">About</a></li>
                        <li><a href="/team" className="">Team</a></li>
                        <li><a href="/sponsors" className="">Sponsors</a></li>
                        <li><a href="/contact" className="">Contact us</a></li>
                        <li><a href="/dev" className="">dev</a></li>
                    </ul>
                </div>
                :
                <></>
            }
        </div>
    )
}

/*
*/