import React, { useState, useEffect } from "react";
import axios from "axios";
//import { useNavigate } from "react-router-dom";


const Search = () => {
  const [articles, setArticles] = useState([]);// Stocke les articles récupérés
  const [findAll, setFindAll] = useState("");// recherche par lettre ou mot clés de l'utilisateur
  const [isLoading, setIsLoading] = useState(false);// Hook  react-router-dom pour la navigation

  const [error, setError] = useState(null);
  //const navigate = useNavigate();

  //Effectue la recherche lorsque le mot-clé change
  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get( `http://localhost:8080/articles/search/designation?keyword=${keyword}`);

        setArticles(result.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    if (findAll) {
        fetchArticles();// Lance la recherche uniquement si un mot-clé est saisi
      }
        }, []);

        //Gère le changement du mot-clé de recherche
        const handleSearch = (e) => {
          setFindAll(e.target.value);
        };

        if (isLoading) {
          return <p>Chargement...</p>;
        }

        if (error) {
          return <p>erreur</p>;
        }

        return (
          <div className="container">
            <div className="row justify-content-center mt-3">
              <div className="col-lg-6 col-md-8">
                <div className="search-container">
                  <input
                    type="text"
                    className="form-control search-input"
                    placeholder="Recherche par mots clés..."
                    value={findAll}
                    onChange={handleSearch}
                    autoFocus
                  />
                </div>
              </div>
            </div>
            <div className="row mt-3">
              {articles.map((article) => (
                <div
                  className="col-md-4"
                  key={article.id}
                  style={{ cursor: "pointer" }}
                >
                  <div className="card mb-4 shadow-sm">
                    <img
                      src={article.image}
                      alt={article.description}
                    />
                    <div className="card-body">
                    <p className="card-text">{article.ref}</p>
                      <p className="card-text">{article.designation}</p>
                      <p className="card-text">Prix: {article.prixHt} €</p>
                      <p className="card-text">{article.tva}</p>
                      <p className="card-text">{article.resume}</p>
                      <p className="card-text">{article.designation}</p>
                      <p className="card-text">{article.image}</p>
                  
                      <button
                        className="btn btn-secondary"
                      >
                        Ajouter au panier
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      };

      export default Search;