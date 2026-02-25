import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_KEY || "";
if (!API_KEY) {
  console.warn("VITE_TMDB_KEY is not set; TMDB requests may fail.");
}
const BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getTrendingMovies = async () => {
  const response = await api.get("/trending/movie/week");
  response.data.results.sort((a, b) => b.vote_average - a.vote_average);
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await api.get("/search/movie", {
    params: { query: query },
  });
  // response.data.results.sort((a, b) => b.vote_average - a.vote_average);
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await api.get(`/movie/${movieId}`);
  return response.data;
};
