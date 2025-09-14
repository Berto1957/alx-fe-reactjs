import React from 'react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#222', color: 'white', textAlign: 'center', padding: '12px', marginTop: '18px' }}>
      <p>&copy; {new Date().getFullYear()} My Favorite Cities</p>
    </footer>
  );
}
