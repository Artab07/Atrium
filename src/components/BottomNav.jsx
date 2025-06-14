import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'AI Chat', icon: <img src="/ai-chat-icon.png" alt="AI Chat" style={{ width: '40px', height: '40px', filter: 'brightness(1.5)' }} />, path: '/' },
    { name: 'Home', icon: <img src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png" alt="Home" style={{ width: '24px', height: '24px', filter: 'invert(100%)' }} />, path: '/' },
    { name: 'Profile', icon: <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="Profile" style={{ width: '24px', height: '24px', filter: 'invert(100%)' }} />, path: '/profile' }
  ];

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '428px',
      height: '60px',
      backgroundColor: '#111',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      color: '#888',
      boxShadow: '0 -2px 8px rgba(0,0,0,0.8)',
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
      zIndex: 1000
    }}>
      {navItems.map(item => (
        <button
          key={item.name}
          onClick={() => navigate(item.path)}
          style={{
            background: 'none',
            border: 'none',
            color: location.pathname === item.path ? '#fff' : '#888',
            fontSize: '28px',
            cursor: 'pointer'
          }}
          aria-label={item.name}
          title={item.name}
        >
          {item.icon}
        </button>
      ))}
    </nav>
  );
}

export default BottomNav;
