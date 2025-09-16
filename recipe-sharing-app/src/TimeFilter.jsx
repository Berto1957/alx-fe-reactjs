import React from 'react';
import { useRecipeStore } from './recipeStore';

const TimeFilter = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  const handleFilter = (time) => {
    setSearchTerm(time.toString());
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <button onClick={() => handleFilter('30')}>Under 30 min</button>
      <button onClick={() => handleFilter('60')}>Under 1 hour</button>
    </div>
  );
};

export default TimeFilter;
