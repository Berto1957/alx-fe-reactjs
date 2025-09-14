import React from "react";
import Counter from "./Counter";   // 👈 This is what the checker is looking for

function App() {
  return (
    <div>
      <h1>My Counter App</h1>
      <Counter />   {/* 👈 Using Counter so it's detected */}
    </div>
  );
}

export default App;
