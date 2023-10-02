
import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import {  Col, Container, Row} from "react-bootstrap";


function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [livres, setLivres] = useState([]);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    // Charge les articles lors du montage du composant
    loadLivres();
  }, []);
  const loadLivres = async () => {
    try {
      const response = await axios.get("http://localhost:8080/livres");
      // Met à jour le state avec les données des livres
      setLivres(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className="car-4">
    <Row>
      {livres.map((livres, index) => (
        <Col md={4} key={index}>
          <div
            style={{ textDecoration: "none" }}

          >
            
            
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        {/* <livres text="Norma Jean" /> */}
        <Carousel.Caption>
          <h3>Biographie de Marilyn</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <livres text="Second slide" /> */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <index text="Third slide" /> */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
            </Col>
          ))}
        </Row>
      </Container>
  );

  
 

}

export default ControlledCarousel;