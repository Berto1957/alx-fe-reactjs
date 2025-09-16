import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => {
    const term = state.searchTerm.toLowerCase();
    return state.recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(term)
    );
  });

  return (
    <ul>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <li key={recipe.id}>
            <strong>{recipe.name}</strong> – {recipe.description}
          </li>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </ul>
  );
};

export default RecipeList;
