import React, { useEffect, useState } from "react";
import "../styles/products.css";

const Products = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://imdb236.p.rapidapi.com/imdb/lowest-rated-movies", {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "99352e0721mshcc3fa14c28ed3cdp100adajsn23c5d2b1b84d", // Replace with your actual API key
            "X-RapidAPI-Host": "imdb236.p.rapidapi.com",
          },
        });
        const data = await response.json();
        console.log(data.results); // Inspect the response structure
        setMovies(data.results || []); // Use a fallback if `results` is undefined
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="products-page">
      <h1 className="products-title">Our Products</h1>
      <div className="products-grid">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <div className="product-card" key={movie.id}>
              <img
                src={movie.image || "https://via.placeholder.com/150"} // Replace `movie.image` with the correct field
                alt={movie.primaryTitle || "Movie Poster"}
                className="product-image"
              />
              <h2 className="product-name">{movie.primaryTitle || "Untitled"}</h2>
              <p className="product-description">{movie.overview?.substring(0, 100) || "No description available"}...</p>
            </div>
          ))
        ) : (
          <p>No movies available.</p>
        )}
      </div>
    </div>
  );
};

export default Products;