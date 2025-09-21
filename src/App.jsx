import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

export default function App() {
  return (
    <Router>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <h1>🍳 Recipe Sharing App</h1>

        {/* Navigation Links */}
        <nav style={{ marginBottom: '10px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/add">Add Recipe</Link>
        </nav>

        <hr />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}
