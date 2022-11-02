import React, { useState } from "react"
import '../styles/componentStyles/header.css'

import logonav from '../assets/logo/logo_white.png'

export default function Header() {
    const [menuView, setMenuView] = useState(false)
    
    const toggleDisplay = () => {
        setMenuView(!menuView)
    }

    return(
        <div class="header">
            <div></div>
            <a href="/" class="d-flex align-items-center justify-content-center col-md-1 mb-2 mb-md-0 text-decoration-none">
                <img id="logoimg" src={logonav}/>
            </a>
            <a href="/" class="d-flex justify-content-center" id="titleHeader">Fuel Fighter</a>
            
            <div class="d-flex justify-content-center" id="menuDisplay" onClick={toggleDisplay}>
                <i class="bi bi-list" id="menu"></i>
                {menuView?"true":"false"}
            </div>
            
            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="/blog" class="">Blog</a></li>
                <li><a href="/about" class="">About</a></li>
                <li><a href="/team" class="">Team</a></li>
                <li><a href="/sponsors" class="">Sponsors</a></li>
                <li><a href="/dev" class="">dev</a></li>
            </ul>

            <ul class="nav col-md-0 justify-content-center text-end">
                <li><a href="https://www.facebook.com/FuelFighterNTNU/" title="facebook">
                    <i class="bi bi-facebook"></i>
                </a></li>
                <li><a href="https://www.instagram.com/fuelfighter_ntnu/" title="instagram" target="_blank" rel="noopener noreferrer">
                    <i class="bi bi-instagram"></i>
                </a></li>
                <li><a href="https://www.youtube.com/user/EcoMarathonNTNU" title="youtube" target="_blank" rel="noopener noreferrer">
                    <i class="bi bi-youtube"></i>
                </a></li>
                <li><a href="https://www.linkedin.com/company/22290458/" title="linkedin" target="_blank" rel="noopener noreferrer">
                    <i class="bi bi-linkedin"></i>
                </a></li>
            </ul>
        </div>
    )
}

/*
*/