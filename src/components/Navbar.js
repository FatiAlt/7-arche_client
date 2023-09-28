
import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';



const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };
  
  return (
    <Navbar expand="lg" bg="dark" variant="dark" expanded={expanded}>
      <Container>
        <Navbar.Brand href="/">Librairie Sept Arche</Navbar.Brand>
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
               Contact <i className="fa-solid fa-user"></i>
            </Nav.Link>


        
      </Nav>
    </Navbar.Collapse>
    <Nav.Link href="/cart" className="nav-link-hover " onClick={toggleNavbar}>
         Mon panier <i className="fas fa-shopping-cart"></i>
        </Nav.Link>
  </Container>
</Navbar>
  );
};

export default NavBar;