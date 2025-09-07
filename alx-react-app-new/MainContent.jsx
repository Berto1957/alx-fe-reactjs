cat > src/components/MainContent.jsx << 'EOF'
function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#f4f4f4', minHeight: '200px' }}>
      <p style={{ fontSize: '18px', color: '#333' }}>Welcome to my favorite cities app. Explore the profiles below!</p>
    </main>
  );
}

export default MainContent;
EOF
