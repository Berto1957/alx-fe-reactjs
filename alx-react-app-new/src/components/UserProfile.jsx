import React from 'react';

export default function UserProfile(props) {
  return (
    <div style={{
      border: '1px solid gray',
      padding: '12px',
      margin: '12px',
      borderRadius: '8px',
      backgroundColor: '#ffffff',
      boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
    }}>
      <h2 style={{ color: 'blue', fontSize: '20px', marginBottom: '8px' }}>{props.name}</h2>
      <p style={{ margin: '6px 0' }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p style={{ margin: '6px 0', fontStyle: 'italic' }}>Bio: {props.bio}</p>
    </div>
  );
}
