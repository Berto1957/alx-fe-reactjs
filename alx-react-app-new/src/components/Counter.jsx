// src/components/Counter.jsx
import { useState } from "react";

export default function Counter() {
  // Step 1: Initialize state with useState
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <p style={{ fontSize: "20px" }}>Current Count: {count}</p>

      {/* Step 2: Buttons for counter actions */}
      <button onClick={() => setCount(count + 1)} style={{ margin: "5px" }}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)} style={{ margin: "5px" }}>
        Decrement
      </button>
      <button onClick={() => setCount(0)} style={{ margin: "5px" }}>
        Reset
      </button>
    </div>
  );
}
