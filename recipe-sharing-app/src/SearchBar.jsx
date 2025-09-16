// src/SearchBar.jsx
import React from "react";
import { useRecipeStore } from "./recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="🔍 Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: "10px",
        border: "2px solid #ccc",
        borderRadius: "8px",
        width: "100%",
        maxWidth: "350px",
        fontSize: "16px",
      }}
    />
  );
};

export default SearchBar;
