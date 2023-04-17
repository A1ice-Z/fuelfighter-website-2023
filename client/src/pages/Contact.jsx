import React from "react"
import '../styles/pageStyles/contactUs.css'
import leaderImage from '../assets/pages/contact/Leader_Tor.JPG';

import TypingText from "../components/TypingText";

export default function Contact() {
    return(
        <main className="container" id="contact-us-container">
            <div className="container d-flex align-items-center">
                <div className="row justify-content-center" id="contact-text">
                    <TypingText
                    text="Any questions?"
                    speed={20}
                    secondaryText="Don't hesistate to contact us!"
                    restartDelay={300}
                    />
                </div>
            </div>
            <div className="row" id="leader-contact-info">
                <div className="col" id="leader-picture">
                    <img src={leaderImage} alt=""/>
                </div>

                <div className='col' id="leader-information">
                        <h2>Tor Børve Rasmussen</h2>
                        <h4> <span class="bi bi-person"></span>{" "}Project Manager</h4>
                        <h5> <span class="bi bi-telephone"></span>{" "}<a href="tell:94131904" >941 34 655</a></h5>
                        <h5> <span class="bi bi-envelope"></span>{" "}<a href="mailto:leder@fuelfighter.no">leder@fuelfighter.no</a></h5>
                </div>
            </div>

            <div className="row primaryColor" id="q_A">
                <div className="col" id="Q&A-col">
                    <div className="h2" id="general-details"> Frequently Asked Questions </div>
                    <div id="general-details">
                        <div className="h3">Why join Fuel Fighter NTNU?</div>
                        <ul>
                            <li>By becoming a member in Fuel Fighter you get the opportunity to work hands on with the worlds most energy efficient car. We use innovative materials, focus on hyper relevant problems such as energy optimisation and encourage members to make their mark on the car.</li>
                            <li>We compete alongside Europes top Technical universities where you will meet many new and interesting people.</li>
                            <li>Our organisation also has a wide array of business connections. By joining Fuel Fighter you will get the opportunity to work alongside some of them and learn more about how our project connects to big real world problems.</li>
                        </ul>
                    </div>
                    <div id="general-details">
                        <div className="h3"> Who can join Fuel Fighter NTNU? </div>
                        <ul>
                            <li>If you are student at NTNU and interested in cars, mechanics, programming, business, or just want to be a part of a big team you are welcome to apply!</li>
                            <li>We want to have a diverse team consisting og 1st to 5th year students from as many disciples as possible. Enthusiasm and curiosity are the things we mostly look for, what you can learn is much more important than what you already know.</li>
                            <li>In team 23 we had members from over 20 different study programmes in all years.</li>
                        </ul>
                    </div>
                    <div id="general-details">
                        <div className="h3"> What is the best way to learn about Fuel Fighter NTNU? </div>
                        <ul>
                            <li>We have lots of information on our website about the history of Fuel Fighter and what we do.</li>
                            <li>If you really want to get to know the organisation, just ask one of our member! By sending questions to post@fuelfighter.no you can get in touch with the team.</li>
                        </ul>
                    </div>
                    <div id="general-details">
                        <div className="h3"> How much work is it? </div>
                        <ul>
                            <li>In general a member spends 15 hours a week working with Fuel Fighter NTNU. The hours are divided between work sessions and meetings.</li>
                            <li>For many of the members the 15 hours fly away because of how fun it is. However if you are worried, dont hesitate to ask for adjustments.</li>
                            <li>View it as an extra subject where you can connect what you learn in lectures onto something fun and engaging.</li>
                        </ul>
                    </div>
                </div>
            </div>

            
            <div className="row" id="adress-info">
                <div className="col" id="adr-col">

                    <div className="h2" id="general-details"> Address </div>
                        <p className="contact-details"> Office <br></br> Klæbuveien 153 </p>

                    <div className="h2" id="general-details"> General Inquiries </div>
                        <p className="contact-details"> Email <br></br> <a id="general-mail" href="mailto:post@fuelfighter.no" >post@fuelfighter.no</a></p>

                    <div className="h2" id="general-details"> Social Media </div>
    
                        <span className="contact-details" > 
                            <a id="contactus-icons" href="https://www.facebook.com/FuelFighterNTNU/" title="facebook" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
                            <a id="contactus-icons" href="https://www.instagram.com/fuelfighter_ntnu/" title="instagram" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                            <a id="contactus-icons" href="https://www.youtube.com/user/EcoMarathonNTNU" title="youtube" target="_blank" rel="noopener noreferrer"><i className="bi bi-youtube"></i></a>
                            <a id="contactus-icons" href="https://www.linkedin.com/company/22290458/" title="linkedin" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                        </span>
                </div>

                <div className="col" id="map-col">
                    <iframe title="map" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1785.950164658801!2d10.404194299999999!3d63.40846749999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466d31c22348c915%3A0x85cb03960f58d16!2sKl%C3%A6buveien%20153%2C%207037%20Trondheim!5e0!3m2!1sno!2sno!4v1677513980935!5m2!1sno!2sno" 
                        className="w-200" 
                        height="300" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                </div>
        </main>
    )
}