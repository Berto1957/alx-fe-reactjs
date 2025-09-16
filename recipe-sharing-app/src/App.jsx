import React from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import TimeFilter from './components/TimeFilter';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🍲 Recipe Sharing App</h1>
      <SearchBar />
      <TimeFilter />
      <RecipeList />
    </div>
  );
}

export default App;
