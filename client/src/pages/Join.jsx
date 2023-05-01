import React from "react";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import joinHero from '../assets/pages/join/joinHero.jpeg';
import '../styles/pageStyles/join.css';

import ParallaxImage from "../components/ParallaxImage";
import LeaderPositions from "./join/LeaderPositions";
// import GeneralPositions from "./join/GeneralPositions";

export const Join = () => {
    return (
        <div className='primaryColor'>
            <ParallaxImage image={joinHero} title='Join Us' height={'70vh'}/>
            <Container className="joinSection text-center primaryColor">
                <div className="introCard">
                    As a cross-disciplinary project we need students from every field of study. We are usually a team of 45 students, and always make sure some of them are exchange students. We like to have a good mixture of people from every year of study, to get good group dynamic and a good work culture to make people want to continue over several years.
                </div>
                {/* <h2 className="text-center introCard" style={{fontFamily: 'Roboto-Black', fontSize: 'calc(var(--fontSize)*1.1)'}}>We are recruiting for new leader positions. Deadline: 19 March</h2> */}
                
                <div className="introCard text-center">
                    <a href="https://forms.office.com/e/JELKE2y10G">
                        <button className="btn btn-join primaryColor">Apply Now</button>
                    </a>
                </div> 
            </Container>
            <Container>
                <h3 className="text-center mt-5">Available Positions</h3>
                <LeaderPositions />
                {/* <GeneralPositions /> */}
            </Container>
        </div>
      );
};