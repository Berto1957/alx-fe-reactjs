// src/App.jsx
import Counter from "./components/Counter";   // ✅ Import Counter

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Simple Counter App</h1>
      <Counter />   {/* ✅ Use Counter */}
    </div>
  );
}

export default App;
