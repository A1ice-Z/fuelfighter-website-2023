import React, {useState } from 'react';
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
    'about',
    'team',
    'sponsors',
    'contact',
    'join',
    'history',
  ];
  let activeLinkIndex = window.location.pathname === '/' ? 0 : navLinks.indexOf(window.location.pathname.substring(1));
  
  const [carStyle, setCarStyle] = useState({
    position: 'absolute',
  });
  
  const handleLinkClick = (index, link) => {
      let nPx =  250 * (index - activeLinkIndex);
      setCarStyle((prevStyle)=>({
        position: 'absolute',
        transition: 'all 0.1s ease-in-out',
        transform: `translateX(${nPx}%)`,
      }))
      setTimeout(() => {
        window.location.href = link === '/' ? '/' : `/${link}`;
      }, 105);
  };
  // const a = headerTransparent ? 'transparentHeader':'';
  const cssSelector1000 = window.innerWidth > 1000;
  const backgroundColor =
    window.innerWidth < 1000
      ? 'var(--tertiary-color)'
      : headerTransparent
      ? 'transparent'
      : 'var(--tertiary-color)';
  
  const linkClassName = (link) => {
      return link === 'join'?'join_animation':'';
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
            {navLinks.map((link, index) => (
              <>
                <Nav.Link
                  key={link}
                  className={`headerLinks nav-link-page-width ${linkClassName(link)}`}
                  style={{ color: 'var(--primary-color)' }}
                  onClick={() => handleLinkClick(index, link)}
                  // ref={(el) => (linkRefs.current[index] = el)}
                >
                  {link === '/' ? 'Home' : link.charAt(0).toUpperCase() + link.slice(1)}
                  {cssSelector1000 && index === activeLinkIndex && link !== '/' && (
                    <div className="car" style={carStyle}>
                      🏎️
                    </div>
                  )}
                </Nav.Link>
              </>
            ))}
          </Nav>
        </Navbar.Collapse>
        {cssSelector1000 && (
          <Navbar.Collapse
            className="justify-content-end"
            style={{ marginRight: '3%', display: 'flex', alignItems: 'center' }}
          >
            <Facebook
              className="headerLinks primaryColor"
              style={{ marginInline: '5px' }}
            />
            <Instagram
              className="headerLinks primaryColor"
              style={{ marginInline: '5px' }}
            />
            <Linkedin
              className="headerLinks primaryColor"
              style={{ marginInline: '5px' }}
            />
            <Youtube
              className="headerLinks primaryColor"
              style={{ marginInline: '5px' }}
            />
          </Navbar.Collapse>
        )}
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
    