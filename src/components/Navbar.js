
import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';







const NavBar = ({ count, handleShow }) => {
  const [expanded, setExpanded] = useState(false);


  const toggleNavbar = () => {
    setExpanded(!expanded);
  };
 
  
  return (
    <Navbar expand="lg" bg="dark" variant="dark" expanded={expanded}>
      <Container>
        <Navbar.Brand href="/" onClick={() => handleShow(false)}>Librairie Sept Arche</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggle" onClick={toggleNavbar} />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto align-items-lg-center">
            <Nav.Link href="/" className="nav-link-hover" onClick={toggleNavbar}>
              Accueil
            </Nav.Link>
            <NavDropdown title="Article" id="nav-dropdown" className="nav-link-hover">
              <NavDropdown.Item href="/book">Livre</NavDropdown.Item>

            </NavDropdown>

            <Nav.Link href="/login" className="nav-link-hover login-cart" onClick={toggleNavbar}>
               Se connecter <i className="fa-solid fa-user"></i>
            </Nav.Link>
            
            <Nav.Link href="/contact" className="nav-link-hover login-cart" onClick={toggleNavbar}>
               Contact <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
               {/* <FontAwesomeIcon icon="fa-regular fa-eye" /> */}

               <button
              onClick={() => handleShow(true)}
              style={{ background: "none", border: "none" }}
            >
              <i className="fas fa-shopping-cart"></i>
              {count}
            </button>


            </Nav.Link>


        
      </Nav>
    </Navbar.Collapse>
    <Nav.Link href="/cart" className="nav-link-hover " onClick={toggleNavbar}>
         Mon panier <ion-icon src="/path/to/external/file.svg" className="ion-icon"></ion-icon>
        </Nav.Link>
  </Container>
</Navbar>
  );
};

export default NavBar;
library.add(fab, fas, far)
