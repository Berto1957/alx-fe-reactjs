// src/TimeFilter.jsx
import React from "react";
import { useRecipeStore } from "./recipeStore";

const TimeFilter = () => {
  const setMaxTime = useRecipeStore((state) => state.setMaxTime);

  return (
    <select
      onChange={(e) => setMaxTime(Number(e.target.value) || null)}
      style={{
        margin: "10px 0",
        padding: "8px",
        borderRadius: "6px",
        fontSize: "14px",
      }}
    >
      <option value="">⏱ Filter by cooking time</option>
      <option value="15">≤ 15 mins</option>
      <option value="30">≤ 30 mins</option>
      <option value="45">≤ 45 mins</option>
      <option value="60">≤ 1 hour</option>
    </select>
  );
};

export default TimeFilter;
