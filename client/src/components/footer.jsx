// import logoBlue from "../assets/logo/logo_blue.png";
// import { DarkModeContext } from "./DarkModeContext"
// const { darkMode } = useContext(DarkModeContext);

import React, { useContext, useEffect } from "react"
import { Container, Row, Col, Nav } from "react-bootstrap";
import '../styles/componentStyles/footer.css'

import logoWhite from '../assets/logo/logo_white.png'
export default function Footer() {

    return (
        <Container>
          <Row id="footer-backround">
            <Row id="upper-part">
              <Col id="about-fuel-fighter">
                <div className="logo">
                  <img src={logoWhite} width="40" />
                  <h2>Fuel Figther NTNU</h2>
                </div>
                <div className="sosials">
                  <Nav className="links">
                    <Nav.Link href="https://www.facebook.com/FuelFighterNTNU/" title="facebook" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-facebook"></i>
                    </Nav.Link>
                    <Nav.Link href="https://www.instagram.com/fuelfighter_ntnu/" title="instagram" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-instagram"></i>
                    </Nav.Link>
                    <Nav.Link href="https://www.youtube.com/user/EcoMarathonNTNU" title="youtube" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-youtube"></i>
                    </Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/company/22290458/" title="linkedin" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-linkedin"></i>
                    </Nav.Link>
                  </Nav>
                  <p className="contact"><a href="/contact"><span>Contact us</span></a></p>
                </div>
              </Col>
              <Col id="navigasjon">
                <h2>Navigation</h2>
                <Nav className="navigasjon flex-column">
                  <Nav.Link href="/blog">Blog</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/team">Team</Nav.Link>
                  <Nav.Link href="/sponsors">Sponsors</Nav.Link>
                </Nav>
              </Col>
              <Col id="information">
                <div className="adresse">
                  <h2>Adresse</h2>
                  <p>Fuel Fighter NTNU</p>
                  <p>Klæbuveien 153</p>
                  <p>7031 Trondheim</p>
                </div>
              </Col>
            </Row>
            <Row id="bottom-part">
              <div className="text">Copyright © 2023 Fuel Fighter NTNU. All rights reserved.</div>
            </Row>
          </Row>
        </Container>
      );
}