import React from "react"

import '../styles/pageStyles/contactUs.css'

import logo from '../assets/logo/logo_black.png'

export default function Contact() {
    return(
        <div className="container" id="contact-us-container">
            <div className="row" id="contact-us-row">
                <div className="col" id="contact-us-text">
                    <h1> Fuel Fighter NTNU </h1>
                    <p> Any questions? Don't hesitate to contact us! </p>
                </div>
            </div>
            <div className="row" id="leader-info">
                <div className="col" id="pic-col">
                    <h1>Picture</h1>
                </div>
                <div className="col" id="cont-col">
                    <h1>Contact Information</h1>
                </div>
            </div>
            <div className="row" id="adress-info">
                <div className="col" id="adr-col">
                    <h1> Adress </h1>
                </div>
                <div className="col" id="map-col">
                    <h1> Map </h1>
                </div>
            </div>
        </div>
    )
}