import React, { useState } from "react"
import '../styles/componentStyles/header.css'

import logonav from '../assets/logo/logo_white.png'
import { useEffect } from "react"

export default function Header() {
    const [menuView, setMenuView] = useState(true)
    
    const toggleDisplay = () => {
        setMenuView(!menuView)
    }

    return(
        <div className="fixed-top">
            <div className="header">
                <div></div>
                <a href="/" className="d-flex align-items-center justify-content-center col-md-1 mb-2 mb-md-0 text-decoration-none">
                    <img id="logoimg" src={logonav}/>
                </a>
                <a href="/" className="d-flex justify-content-center" id="titleHeader">Fuel Fighter</a>
                
                <div className="d-flex justify-content-center" id="menuDisplay" onClick={toggleDisplay}>
                    <i className="bi bi-list" id="menu"></i>
                </div>
                
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                </ul>

                <ul className="nav col-md-0 justify-content-center text-end">
                    <li><a href="https://www.facebook.com/FuelFighterNTNU/" title="facebook">
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
                <div className="headMenu">
                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0" id="menuBar">
                        <li><a href="/" className="">Home</a></li>
                        <li><a href="/blog" className="">Blog</a></li>
                        <li><a href="/about" className="">About</a></li>
                        <li><a href="/team" className="">Team</a></li>
                        <li><a href="/sponsors" className="">Sponsors</a></li>
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