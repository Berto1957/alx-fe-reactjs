import React from 'react';
import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#f0f8ff', minHeight: '60vh' }}>
      <h2 style={{ textAlign: 'center', color: 'darkslategray' }}>User Profiles</h2>
      <UserProfile name="Alice" age="25" bio="Loves traveling and photography." />
      <UserProfile name="Bob" age="30" bio="Enjoys coding and outdoor adventures." />
    </main>
  );
}

export default MainContent;
