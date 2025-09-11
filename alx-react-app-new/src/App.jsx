// src/App.jsx
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import UserContext from "./UserContext";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <Header />
        <MainContent />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
