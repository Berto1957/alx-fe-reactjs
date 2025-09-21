import React from "react";
import { useParams, Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id.toString() === id)
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
      <Link to={`/edit/${recipe.id}`}>Edit</Link>
    </div>
  );
};

export default RecipeDetail;
