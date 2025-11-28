import React from "react";

const SearchBar = ({ setSearchTerm }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by Company Name or Stock Symbol..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};

export default SearchBar;
