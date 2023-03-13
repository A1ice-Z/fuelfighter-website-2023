import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Facebook, Instagram, Linkedin, Youtube } from 'react-bootstrap-icons';
import '../styles/componentStyles/header.css'
import logoWhite from '../assets/logo/logo_white.png'
// import logoBlue from '../assets/logo/logo_blue.png'

// import { DarkModeContext } from "./DarkModeContext"

export default function Header({ headerTransparent }) {
  const backgroundColor = window.innerWidth < 768
      ? 'var(--tertiary-color)'
      : headerTransparent
      ? 'transparent'
      : 'var(--tertiary-color)'
  
  return (
      <Navbar
        style={{
          backgroundColor,
          zIndex: 99, 
        }}
        expand="lg"
      >
        <Container fluid>
          <Navbar.Brand href="/" style={{ color: 'var(--primary-color)', marginLeft: '5%' }}>
            <img src={logoWhite} alt="" width="48" height="48" />
            Fuel Fighter
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav"/>
          <Navbar.Collapse id="navbarNav" className="justify-content-left primaryColor">
            <Nav className='align-items-center'>
              <Nav.Link className="headerLinks" style={{ color: 'var(--primary-color)' }} href="/">
                Home
              </Nav.Link>
              <Nav.Link className="headerLinks" style={{ color: 'var(--primary-color)' }} href="blog">
                Blog
              </Nav.Link>
              <Nav.Link className="headerLinks" style={{ color: 'var(--primary-color)' }} href="about">
                About
              </Nav.Link>
              <Nav.Link className="headerLinks" style={{ color: 'var(--primary-color)' }} href="team">
                Team
              </Nav.Link>
              <Nav.Link className="headerLinks" style={{ color: 'var(--primary-color)' }} href="sponsors">
                Sponsors
              </Nav.Link>
              <Nav.Link className="headerLinks" style={{ color: 'var(--primary-color)' }} href="contact">
                Contact Us
              </Nav.Link>
              <Nav.Link className="headerLinks" style={{ color: 'var(--primary-color)' }} href="join">
                Join
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
  
          {window.innerWidth > 768 && ( 
            <Navbar.Collapse className='justify-content-end' style={{marginRight: '3%', display: 'flex', alignItems: 'center'}}>
              <Facebook className='headerLinks primaryColor' style={{ marginInline: '5px'}} />
              <Instagram className='headerLinks primaryColor' style={{ marginInline: '5px'}} />
              <Linkedin className='headerLinks primaryColor' style={{ marginInline: '5px'}} />
              <Youtube className='headerLinks primaryColor' style={{ marginInline: '5px'}} />
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
    );
  }

    // const [menuView, setMenuView] = useState(false)
    // const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    //BLUE & WHITE HANDLED HERE ///////////////////////////////////////////////////////////////////////////
    // useEffect(()=>{
    //     document.documentElement.style.setProperty('--primary-color', !darkMode ? '#222f5c' : '#ffffff');
    //     document.documentElement.style.setProperty('--secondary-color', !darkMode ? '#ffffff' : '#222f5c');
    // }, [darkMode]);
    ///////////////////////////////////////////////////////////////////////////////////////////////////////

    // useEffect(()=>{
    //     const imag = document.getElementById("logoimg"); 
    //     imag.src = !darkMode ? logoBlue : logoWhite;
    // }, [darkMode]);
    // useEffect(()=>{
    //     let x = document.querySelector('#dajeHead');
    //     x.style.backgroundColor = headerTransparent ? "none" : "var(--tertiary-color)";
    //     x.style.color= "var(--primary-color)";
    // }, [path]);
    