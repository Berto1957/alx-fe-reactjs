// src/recipeStore.js
import { create } from "zustand";

export const useRecipeStore = create((set, get) => ({
  recipes: [
    { id: 1, title: "Jollof Rice", description: "West African dish", ingredients: ["rice", "tomato"], time: 45 },
    { id: 2, title: "Pancakes", description: "Breakfast treat", ingredients: ["flour", "milk"], time: 15 },
    { id: 3, title: "Egusi Soup", description: "Nigerian melon soup", ingredients: ["melon seeds", "spinach"], time: 60 },
  ],
  searchTerm: "",
  maxTime: null, // new filter
  setSearchTerm: (term) => set({ searchTerm: term }),
  setMaxTime: (time) => set({ maxTime: time }),

  filteredRecipes: () => {
    const { recipes, searchTerm, maxTime } = get();
    return recipes.filter((recipe) => {
      const matchesSearch = recipe.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesTime = maxTime ? recipe.time <= maxTime : true;
      return matchesSearch && matchesTime;
    });
  },
}));
