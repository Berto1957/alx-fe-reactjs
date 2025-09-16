import React from 'react';
import RecipeDetail from './components/RecipeDetail';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import TimeFilter from './components/TimeFilter';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🍲 Recipe Sharing App</h1>
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      <SearchBar />
      <TimeFilter />
      <RecipeList />
    </div>
  );
}

export default App;
