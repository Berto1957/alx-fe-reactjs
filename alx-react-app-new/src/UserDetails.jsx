// src/UserDetails.jsx
import { useContext } from "react";
import UserContext from "./UserContext";

function UserDetails() {
  // ✅ Consume context instead of props
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
