import React from 'react';

function EventCard({ image, title, date }) {
  return (
    <div style={{
      width: '190px',
      height: '220px',
      borderRadius: '20px',
      overflow: 'hidden',
      cursor: 'pointer',
      boxShadow: '0 4px 12px rgba(0,0,0,0.7)',
      color: '#fff',
      backgroundColor: '#111',
      fontFamily: "'Poppins', sans-serif"
    }}>
      <img
        src={image}
        alt={title}
        style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '20px 20px 0 0' }}
      />
      <div style={{ padding: '10px' }}>
        <div style={{ fontWeight: '700', fontSize: '16px', marginBottom: '4px' }}>{title}</div>
        <div style={{ fontSize: '14px', color: '#bbb' }}>{date}</div>
      </div>
    </div>
  );
}

export default EventCard;
