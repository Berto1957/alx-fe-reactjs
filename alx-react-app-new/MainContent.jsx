// src/MainContent.jsx
import { useContext } from "react";
import UserContext from "./UserContext";

function MainContent() {
  const userData = useContext(UserContext);

  return (
    <main style={{ margin: "20px", padding: "10px", border: "1px solid gray" }}>
      <h2>Welcome, {userData.name}!</h2>
      <p>Email: {userData.email}</p>
      <p>I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
}

export default MainContent;
