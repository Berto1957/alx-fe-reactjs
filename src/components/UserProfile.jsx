function UserProfile(props) {
  return (
    <div style={{ 
      border: '2px solid gray', 
      padding: '15px', 
      margin: '15px', 
      borderRadius: '8px', 
      backgroundColor: '#f0f8ff' 
    }}>
      <h2 style={{ color: 'blue', fontSize: '1.5rem', marginBottom: '10px' }}>
        {props.name}
      </h2>
      <p>
        Age: <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>{props.age}</span>
      </p>
      <p style={{ fontStyle: 'italic' }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
