import React from "react"
import '../styles/componentStyles/header.css'

import logonav from '../assets/logo/logo_white.png'

export default function Header() {
    return(
        <header>
            <nav className="header">
                <ul className="container">
                    <li><img id="logoimg" alt="" src={logonav}/></li>
                    <li><h1 className="title"><a href="/">FUEL FIGHTER</a></h1></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/dev">Development Options</a></li>
                </ul>
            </nav>
        </header>
        
    )
}