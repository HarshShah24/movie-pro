import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={searchContainerStyle}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={searchInputStyle}
          onFocus={(e) => (e.target.style.borderColor = "#E50914")}
          onBlur={(e) => (e.target.style.borderColor = "#333")}
        />
        <button type="submit" style={searchButtonStyle}>
          Search
        </button>
      </form>
    </div>
  );
};

const searchContainerStyle = {
  display: "flex",
  justifyContent: "center",
  padding: "40px 20px",
  width: "100%",
  boxSizing: "border-box",
  background: "linear-gradient(to bottom, #141414, transparent)", // Fades into the grid
};

const searchInputStyle = {
  width: "100%",
  maxWidth: "600px",
  padding: "12px 20px",
  fontSize: "16px",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  border: "1px solid #333",
  borderRadius: "4px 0 0 4px", // Rounded on left
  color: "white",
  outline: "none",
  transition: "border-color 0.3s",
};

const searchButtonStyle = {
  padding: "12px 24px",
  backgroundColor: "#E50914", // Classic red accent
  color: "white",
  border: "none",
  borderRadius: "0 4px 4px 0", // Rounded on right
  cursor: "pointer",
  fontWeight: "bold",
  transition: "background-color 0.2s",
};

export default SearchBar;
