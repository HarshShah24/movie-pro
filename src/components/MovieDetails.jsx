import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieDetails } from "../services/api";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // For the "Back" button
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>← Back</button>
      <div style={detailsContainerStyle}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={posterStyle}
        />
        <div style={infoStyle}>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Rating:</strong> ⭐ {movie.vote_average}
          </p>
        </div>
      </div>
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

const posterStyle = {
  flex: "300px", // Don't grow, don't shrink, stay 300px wide
  borderRadius: "12px",
  flexShrink: 0,
};

const infoStyle = {
  flex: "1", // Take up all remaining horizontal space
  color: "white",
  textAlign: "left", // Professional look for descriptions
};

export default MovieDetails;
