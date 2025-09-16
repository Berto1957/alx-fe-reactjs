// src/App.jsx
import React from "react";
import SearchBar from "./SearchBar";
import RecipeList from "./RecipeList";
import TimeFilter from "./TimeFilter";

function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        🍲 Recipe Sharing App
      </h1>

      {/* Search and Filters */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <SearchBar />
        <TimeFilter />
      </div>

      {/* Recipe Results */}
      <RecipeList />
    </div>
  );
}

export default App;
