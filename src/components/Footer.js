import React from 'react';
import { NavLink } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="footer-logo">
              <h3>Librairie Sept Arche</h3>
              {/* <p>Depuis 1998, la librairie vous propose les meilleurs nouveautés dans le domaine du cinéma<br>
              vous avez accès à toutes les raretés en matière de films, de ses débuts à nos jours. </p> */}
              <NavLink to='about'><h5>A propos</h5></NavLink>
            </div>
          </div>
          <div className="col-md-6">
            
            </div>
          </div>
        </div>
    </footer>
  );
};



  export default Footer;