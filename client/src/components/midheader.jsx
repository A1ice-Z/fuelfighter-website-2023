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
            <div className="header" id="headerBackground">
                <div className="container">
                    <div className="row">
                        <div className="col-auto" id="logo-block">
                            <img id="logoimg" src={logoWhite} alt="fuel fighter logo" width="52" />
                            <a href="/" className="d-flex justify-content-center" id="titleHeader">Fuel Fighter</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}