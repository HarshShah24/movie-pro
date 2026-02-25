// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { getTrendingMovies, searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <SearchBar
        onSearch={async (query) => {
          const data = await searchMovies(query);
          setMovies(data);
        }}
      />
      <div style={gridStyle}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "20px",
  padding: "20px",
  width: "100%",
  boxSizing: "border-box",
};

export default Home; // This "export" allows App.js to "import" it
