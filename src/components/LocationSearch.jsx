import React, { useState, useEffect } from 'react';
import LocationPickerModal from './LocationPickerModal';

function LocationSearch() {
  const [location, setLocation] = useState('');
  const [coords, setCoords] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          setCoords([lat, lon]);
          // Reverse geocode to get address
          fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
            .then(response => response.json())
            .then(data => {
              if (data.status === 'OK' && data.results.length > 0) {
                setLocation(data.results[0].formatted_address);
              } else {
                setLocation('Current Location');
              }
            })
            .catch(() => {
              setLocation('Current Location');
            });
        },
        () => {
          setLocation('Current Location');
        }
      );
    } else {
      setLocation('Current Location');
    }
  }, []);

  const handleConfirm = (selectedCoords, selectedAddress) => {
    setCoords(selectedCoords);
    setLocation(selectedAddress || `Lat: ${selectedCoords[0].toFixed(4)}, Lon: ${selectedCoords[1].toFixed(4)}`);
    setModalOpen(false);
  };

  return (
    <>
      <div style={{
        height: '44px',
        backgroundColor: '#8ab9d6',
        borderRadius: '22px',
        margin: '20px 20px 10px 20px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 15px',
        color: '#fff',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: '600',
        fontSize: '17px',
        boxSizing: 'border-box',
        boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
      }}>
        <span style={{ marginRight: '12px', fontSize: '22px' }}>📍</span>
        <input
          type="text"
          value={location}
          readOnly
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            color: '#fff',
            fontSize: '17px',
            fontWeight: '600',
            fontFamily: "'Poppins', sans-serif"
          }}
        />
        <button
          onClick={() => setModalOpen(true)}
          style={{
            backgroundColor: '#4a90e2',
            border: 'none',
            borderRadius: '18px',
            padding: '8px 14px',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '20px',
            fontWeight: '700',
            boxShadow: '0 2px 6px rgba(0,0,0,0.4)'
          }}
          aria-label="Search Location"
          title="Search Location"
        >
          🔍
        </button>
      </div>
      {modalOpen && (
        <LocationPickerModal
          initialPosition={coords || [22.5448, 88.3426]}
          onClose={() => setModalOpen(false)}
          onConfirm={handleConfirm}
        />
      )}
    </>
  );
}

export default LocationSearch;
