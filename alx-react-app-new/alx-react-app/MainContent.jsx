import React from 'react';
import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <UserProfile name="John Doe" age={28} bio="A passionate traveler and software developer." />
      <UserProfile name="Jane Smith" age={32} bio="Loves hiking and outdoor adventures." />
    </main>
  );
}

export default MainContent;
