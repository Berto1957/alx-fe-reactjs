import React from 'react';
import UserProfile from './UserProfile';

export default function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#e6f7ff', minHeight: '240px' }}>
      <h2 style={{ color: 'darkslategray', textAlign: 'center' }}>User Profiles</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '16px',
        marginTop: '18px'
      }}>
        <UserProfile name="Alice" age={25} bio="Loves traveling and photography." />
        <UserProfile name="Bob" age={30} bio="Enjoys coding and outdoor adventures." />
      </div>
    </main>
  );
}
