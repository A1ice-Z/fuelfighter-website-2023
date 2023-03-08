import React, { useEffect, useState } from "react"
import '../styles/pageStyles/contactUs.css'
import logo from '../assets/logo/logo_black.png'
import teamService from "../_services/team.service";

export default function Contact() {

    const defaultLeaderYear = 2023;
    const defaultLeader = [];

    const [selectedLeaderYear, setSelectedLeader] = useState(defaultLeader);

    useEffect( () => {
        console.log("Inside of useEffect");
        var showLeaderYear = selectedLeaderYear;

        const loadingLeaderData = async (showLeaderYear) =>{
            const data = await teamService.getLeader(showLeaderYear);
            setSelectedLeader ([data]);
        }
        loadingLeaderData(showLeaderYear);
    }, 
    console.log(selectedLeaderYear)

    )



    return(
        <div className="container" id="contact-us-container">

            <div className="row" id="contact-us-row">
                <div className="col" id="contact-us-text">
                    <h1> Fuel Fighter NTNU </h1>
                    <p> Any questions? Don't hesitate to contact us! </p>
                </div>
            </div>

            <div className="row" id="leader-contact-info">
                <div className="col" id="pic-col">
                    {/* <img src={selectedLeaderYear[0][0]} image={selectedLeaderYear[0][0]}/> */}
                    
                </div>
                <div className='col' id="leader-contact-info">
                        <h3>Tor Børve Rasmussen</h3>
                        <h4>Project Manager</h4>
                        <h5 id="detailsContact">Tlf:        <a href="tell:94131904" >941 34 655</a></h5>
                        <h5 id="detailsContact">Email:      <a href="mailto:br@fuelfighter.no" >leder@fuelfighter.no</a></h5>
                </div>
            </div>

            <div className="row" id="adress-info">
                <div className="col" id="adr-col">

                    <div className="h2" id="general-details"> Adress </div>
                        <p className="contact-details"> Office <br></br> Klæbuveien 153 </p>

                    <div className="h2" id="general-details" /* id="general-details" */> General Inquiries </div>
                        <p className="contact-details"> Email <br></br> <a href="mailto:contact@fuelfighter.no" >contact@fuelfighter.no</a></p>

                    <div className="h2" id="general-details"> Social Media </div>
    
                        <span className="contact-details"> 
                        <a href="https://www.facebook.com/FuelFighterNTNU/" title="facebook" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
                        <a href="https://www.instagram.com/fuelfighter_ntnu/" title="instagram" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                        <a href="https://www.youtube.com/user/EcoMarathonNTNU" title="youtube" target="_blank" rel="noopener noreferrer"><i className="bi bi-youtube"></i></a>
                        <a href="https://www.linkedin.com/company/22290458/" title="linkedin" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                        </span>
                </div>

                <div className="col" id="map-col">
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1785.950164658801!2d10.404194299999999!3d63.40846749999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466d31c22348c915%3A0x85cb03960f58d16!2sKl%C3%A6buveien%20153%2C%207037%20Trondheim!5e0!3m2!1sno!2sno!4v1677513980935!5m2!1sno!2sno" 
                    className="w-200" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                    
                </div>

            </div>
        </div>
    )
}