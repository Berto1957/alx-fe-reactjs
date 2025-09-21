import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <div>
      <h1>My Recipes</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;

