import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Facebook, Instagram, Linkedin, Youtube } from 'react-bootstrap-icons';
import '../styles/componentStyles/header.css'
import logoWhite from '../assets/logo/logo_white.png'
// import logoBlue from '../assets/logo/logo_blue.png'

// import { DarkModeContext } from "./DarkModeContext"
export default function Header({ headerTransparent }) {
  const navLinks = [
    '/',
    'blog',
    'history',
    'team',
    'sponsors',
    'contact',
    'join',
    'about',
  ];
  let activeLinkIndex = window.location.pathname === '/' ? 0 : navLinks.indexOf(window.location.pathname.substring(1));
  
  const handleLinkClick = (index, link) => {
    window.location.href = link === '/' ? '/' : `/${link}`;
  };

  const backgroundColor =
    window.innerWidth < 1000
      ? 'var(--tertiary-color)'
      : headerTransparent
      ? 'transparent'
      : 'var(--tertiary-color)';
  
  const linkClassName = (index, link) => {
      return index === activeLinkIndex ? 'selectedLink':'';
  }
  
  return (
    <Navbar id="headerBar" style={{ backgroundColor: backgroundColor, color: 'var(--primary-color)', zIndex: 99}} expand="lg">
      <Container fluid>
        <Navbar.Brand
          href="/"
          style={{ color: 'var(--primary-color)', marginInline: '5%' }}
        >
          <img
            src={logoWhite}
            alt=""
            width="48"
            height="48"
            style={{ marginRight: '50px' }}
          />
          Fuel Fighter
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav" className="justify-content-left primaryColor">
          <Nav className="align-items-center">
            {navLinks.map((link, index) => link !== '/' && (
              <>
                <Nav.Link
                  key={link}
                  className={`headerLinks nav-link-page-width ${linkClassName(index, link)}`}
                  style={{ color: 'var(--primary-color)' }}
                  onClick={() => handleLinkClick(index, link)}
                >
                  {link === '/' ? 'Home' : link.charAt(0).toUpperCase() + link.slice(1)}
                </Nav.Link>
              </>
            ))}
          </Nav>
        </Navbar.Collapse>
        
          <Navbar.Collapse
            className="justify-content-end"
            style={{ marginRight: '3%', display: 'flex', alignItems: 'center' }}
          >
            <Facebook
              className="headerLinks headerLinkSocial primaryColor"
              style={{ marginInline: '5px' }}
              onClick={() => window.open('https://www.facebook.com/FuelFighterNTNU', '_blank')}
            />
            <Instagram
              className="headerLinks headerLinkSocial primaryColor"
              style={{ marginInline: '5px' }}
              onClick={() => window.open('https://www.instagram.com/fuelfighter_ntnu/', '_blank')}
            />
            <Linkedin
              className="headerLinks headerLinkSocial primaryColor"
              style={{ marginInline: '5px' }}
              onClick={() => window.open('https://www.linkedin.com/company/22290458/', '_blank')}
            />
            <Youtube
              className="headerLinks headerLinkSocial primaryColor"
              style={{ marginInline: '5px' }}
              onClick={() => window.open('https://www.youtube.com/user/EcoMarathonNTNU', '_blank')}
            />
          </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}
// 

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
    