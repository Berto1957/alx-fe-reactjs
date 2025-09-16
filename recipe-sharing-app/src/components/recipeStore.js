import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',

  // 🔍 Update search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // ➕ Add a new recipe
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

  // ✏️ Update an existing recipe
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),

  // ❌ Delete a recipe
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // 📌 Computed filtered recipes
  filteredRecipes: (state) =>
    state.recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
}));
