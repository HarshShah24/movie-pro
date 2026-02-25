import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const MovieCard = ({ movie }) => {
  return (
    <div style={detailsContainerStyle}>
      <Link to={`/movie/${movie.id}`}>
        <div style={movieCardStyle} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            style={imageStyle}
          />
          <h3 style={titleStyle}>{movie.title}</h3>
          <h3 style={titleStyle}>Rating: ⭐ {movie.vote_average.toFixed(1)}</h3>
        </div>
      </Link>
    </div>
  );
};

const detailsContainerStyle = {
  display: "flex", // Align children horizontally
  flexDirection: "row", // Forces side-by-side layout
  gap: "40px", // Space between poster and text
  padding: "20px",
  alignItems: "flex-start", // Keeps text at the top
  width: "100%",
  flexWrap: "wrap", // Allows it to stack on mobile phones
};

const movieCardStyle = {
  backgroundColor: "#1a1a1a", // Dark theme background
  borderRadius: "12px",
  overflow: "hidden", // Clips the image to the border radius
  transition: "transform 0.2s ease-in-out",
  cursor: "pointer",
  display: "block", // As discussed, standard block behavior
  unicodeBidi: "isolate", // Keeps text direction safe
};

const imageStyle = {
  width: "100%",
  aspectRatio: "2/3", // Keeps all posters the same height
  objectFit: "cover",
  display: "block",
};

const titleStyle = {
  padding: "12px",
  fontSize: "1rem",
  color: "white",
  textAlign: "center",
  margin: "0",
};

export default MovieCard;
