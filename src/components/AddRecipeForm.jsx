import React, { useState } from "react";
import useRecipeStore from "./recipeStore";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !instructions) return;
    addRecipe({ title, instructions });
    setTitle("");
    setInstructions("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Recipe</h2>
      <input
        type="text"
        placeholder="Recipe title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddRecipeForm;
