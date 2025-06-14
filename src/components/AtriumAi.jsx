import React from 'react';

function AtriumAi() {
    return (
        <div style={{
            backgroundColor: 'rgba(3, 54, 33, 1)',
            borderRadius: '25px',
            color: '#fff',
            fontWeight: '600',
            textAlign: 'center',
            width: '388px',
            height: '150px',
            maxWidth: '100%',
            margin: '20px auto',
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.7)',
            fontFamily: "'Poppins', sans-serif",
            position: 'relative'
        }}>
            <span style={{
                position: 'absolute',
                bottom: '40px',
                left: '50%',
                transform: 'translateX(-50%)',
                whiteSpace: 'nowrap',
                fontSize: '18px',
                fontWeight: '700'
            }}>
                Let ATRIUM book your tickets
            </span>
            <div style={{
                position: 'relative',
                bottom: '90px',
                width: '150px',
                height: '150px',
                margin: '0 auto',
                borderRadius: '50%',
                background: 'radial-gradient(circle at center, #a0c4ff, #3a86ff)',
                boxShadow: '0 0 20px #a0c4ff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '18px',
                fontWeight: '700',
                lineHeight: '80px',
                color: '#004d40',
                userSelect: 'none'
            }}>
            </div>
        </div>
    );
}

export default AtriumAi;
