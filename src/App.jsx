import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

export default function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>🍳 Recipe Sharing App</h1>
      <AddRecipeForm />
      <hr />
      <RecipeList />
    </div>
  );
}
