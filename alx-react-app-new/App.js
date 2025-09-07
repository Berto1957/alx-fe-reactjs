cat > src/App.js << 'EOF'
import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Alice" age={25} bio="I love traveling and exploring new cultures." />
      <UserProfile name="Bob" age={30} bio="Foodie and history enthusiast." />
      <Footer />
    </div>
  );
}

export default App;
EOF
