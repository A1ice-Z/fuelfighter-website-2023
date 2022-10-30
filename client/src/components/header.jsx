import React from "react"
import '../styles/componentStyles/header.css'

import logonav from '../assets/logo/logo_white.png'

export default function Header() {
    return(
        <div class="header">
            <header class="containerHead">
                <a href="/" class="d-flex align-items-center col-md-1 mb-2 mb-md-0 text-dark text-decoration-none">
                    <img id="logoimg" src={logonav}/>
                </a>
                <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" class="">Fuel Fighter</a></li>
                    <li><a href="#" class="">Home</a></li>
                    <li><a href="#" class="">Features</a></li>
                    <li><a href="#" class="">Pricing</a></li>
                    <li><a href="#" class="">FAQs</a></li>
                    <li><a href="#" class="">About</a></li>
                    <li><a href="#" class="">blog</a></li>
                    <li><a href="#" class="">dev</a></li>
                </ul>
            
                <div class="col-md-3 text-end">
                    <button type="button" class="btn btn-outline-primary me-2">Login</button>
                    <button type="button" class="btn btn-primary">Sign-up</button>
                </div>
            </header>
        </div>
    )
}

/*
<header>
            <nav className="header">
                <ul className="containerHead">
                    <li><h1 className="title"><a href="/">FUEL FIGHTER</a></h1></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/dev">Development Options</a></li>
                </ul>
            </nav>
        </header>
*/