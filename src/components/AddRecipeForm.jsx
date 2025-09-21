import React, { useState } from 'react';
import useRecipeStore from '../store/recipeStore';

export default function AddRecipeForm() {
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addRecipe({
      title,
      ingredients: ingredients.split(',').map((ing) => ing.trim()),
    });

    setTitle('');
    setIngredients('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Recipe</h2>
      <div>
        <input
          type="text"
          placeholder="Recipe title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
      <button type="submit">Add Recipe</button>
    </form>
  );
}
