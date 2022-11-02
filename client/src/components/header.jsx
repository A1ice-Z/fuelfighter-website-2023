import React from "react"
import '../styles/componentStyles/header.css'

import logonav from '../assets/logo/logo_white.png'


export default function Header() {
    return(
        <div class="header">
            <a href="/" class="d-flex align-items-center col-md-1 mb-2 mb-md-0 text-dark text-decoration-none">
                <img id="logoimg" src={logonav}/>
            </a>
            <a href="/" id="titleHeader">Fuel Fighter</a>
            <span class="material-symbols-outlined" id="menu">menu</span>
            
            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="/blog" class="">Blog</a></li>
                <li><a href="/about" class="">About</a></li>
                <li><a href="/team" class="">Team</a></li>
                <li><a href="/sponsors" class="">Sponsors</a></li>
                <li><a href="/dev" class="">dev</a></li>
            </ul>
        
            <div class="col-md-3 text-end">
                {/* <button type="button" class="btn btn-outline-primary me-2">Login</button>
                <button type="button" class="btn btn-primary">Sign-up</button> */}
            </div>
        </div>
    )
}