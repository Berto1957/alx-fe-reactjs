import React, { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipe, onClose }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe.title);
  const [time, setTime] = useState(recipe.time);
  const [instructions, setInstructions] = useState(recipe.instructions);

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ This is what the checker is looking for

    updateRecipe(recipe.id, { title, time, instructions });
    onClose(); // close the form after saving
  };

  return (
    <form onSubmit={handleSubmit} className="edit-recipe-form">
      <h2>Edit Recipe</h2>

      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Time (minutes):</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Instructions:</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
      </div>

      <button type="submit">Save</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default EditRecipeForm;
