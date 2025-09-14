import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', padding: '10px', marginTop: '20px' }}>
      <p>&copy; {new Date().getFullYear()} My Favorite Cities</p>
    </footer>
  );
}

export default Footer;
