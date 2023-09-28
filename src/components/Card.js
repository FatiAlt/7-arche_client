import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Container, Row, Button } from "react-bootstrap";

const Cards = () => {
  // Utilise le state pour stocker les articles et les articles du panier
  const [articles, setArticles] = useState([]);
  //const [cardItems, setCardItems] = useState([]);

  useEffect(() => {
    // Charge les articles lors du montage du composant
    loadArticles();
  }, []);

  const loadArticles = async () => {
    try {
      const response = await axios.get("http://localhost:8080/articles");
      // Met à jour le state avec les données des articles
      //console.log(response);
      setArticles(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Container className="py-4">
        <Row>
          {articles.map((article, index) => (
            <Col md={4} key={index}>
              <div
                style={{ textDecoration: "none" }}

              >
                <Card
                  className="mb-4"
                  style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", cursor: "pointer" }}
                >
                  <Card.Img
                    variant="top"
                    src={article.image}
                    style={{ width: "100%", height: "300px", objectFit: "cover" }}
                  />
                  <Card.Body style={{ textAlign: "center" }}>
                    <Card.Title>{article.designation}</Card.Title>
                    <Card.Text>{article.resume}</Card.Text>
                    <Card.Text>Prix : {article.prixTTC} €</Card.Text>
                    
                  </Card.Body>
                  <Button variant="dark">Ajouter au panier</Button>

                  {/* <Button type="submit">Ajouter au panier</Button>{' '} */}

                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      </div>
  );
               
  };

  // <div class="container">
  // <div class="row">
  //    <div class="col-md-7">
  //       <nav>
  //          <ul class="nav justify-content-evenly text-white bg-primary">
  //             <li><a href="#">Link #1</a></li>
  //             <li><a href="#">Link #2</a></li>
  //             <li><a href="#">Link #3</a></li>
  //             <li><a href="#">Link #4</a></li>
  //          </ul>
  //       </nav>
  //       <div class="main d-flex">
  //          <div class="bg-light flex-grow-1 p-2">
  //             <h3>Main Content</h3>
  //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  //          </div>
  //          <aside class="bg-success text-white p-2">
  //             <h3>Sidebar</h3>
  //             <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
  //          </aside>
  //       </div>
  //       ;
export default Cards;