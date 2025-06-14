import React from 'react';

function FeaturedBanner() {
  return (
    <div style={{
      margin: '20px',
      borderRadius: '20px',
      overflow: 'hidden',
      position: 'relative',
      cursor: 'pointer',
      boxShadow: '0 8px 16px rgba(0,0,0,0.6)',
      height: '400px',
      width: '388px',
      marginLeft: '20px',
      marginRight: '20px'
    }}>
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
        alt="Museum Gallery"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{
        position: 'absolute',
        top: '35%',
        left: '50%',
        transform: 'translate(-50%, -35%)',
        color: '#fff',
        fontSize: '28px',
        fontWeight: '700',
        textAlign: 'center',
        fontFamily: "'Poppins', sans-serif",
        textShadow: '3px 3px 6px rgba(0,0,0,0.8)'
      }} />
    </div>

  );
}

export default FeaturedBanner;
