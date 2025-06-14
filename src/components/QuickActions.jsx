import React from 'react';
import { useNavigate } from 'react-router-dom';

function QuickActions() {
  const navigate = useNavigate();

  return (
    <div style={{ margin: '20px' }}>
      <h2 style={{ color: '#fff', marginBottom: '15px', fontFamily: "'Poppins', sans-serif", fontWeight: '700', fontSize: '20px' }}>Quick Actions</h2>
      <div style={{ display: 'flex', gap: '15px' }}>
        <button
          onClick={() => navigate('/book-ticket')}
          style={{
            flex: 1,
            backgroundColor: 'rgba(3, 54, 33, 1)',
            height: '200px',
            color: '#fff',
            padding: '25px',
            borderRadius: '25px',
            fontWeight: '700',
            fontSize: '18px',
            cursor: 'pointer',
            border: 'none',
            fontFamily: "'Poppins', sans-serif"
          }}
        >
          Book Ticket
        </button>
        <button
          onClick={() => navigate('/ticket-history')}
          style={{
            flex: 1,
            backgroundColor: 'rgba(3, 54, 33, 1)',
            height: '200px',
            color: '#fff',
            padding: '25px',
            borderRadius: '25px',
            fontWeight: '700',
            fontSize: '18px',
            cursor: 'pointer',
            border: 'none',
            fontFamily: "'Poppins', sans-serif"
          }}
        >
          Ticket History
        </button>
      </div>
    </div>
  );
}

export default QuickActions;
