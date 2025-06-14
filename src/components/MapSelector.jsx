import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default icon issue with leaflet in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const mockPlaces = [
  {
    id: 1,
    name: 'Victoria Memorial',
    position: [22.5448, 88.3426],
    type: 'Museum',
  },
  {
    id: 2,
    name: "St Paul's Cathedral",
    position: [22.5440, 88.3470],
    type: 'Art Gallery',
  },
  {
    id: 3,
    name: 'Zoological Garden Alipore',
    position: [22.5350, 88.3420],
    type: 'Museum',
  },
];

function MapSelector() {
  const [position, setPosition] = useState([22.5448, 88.3426]); // Center position

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        () => {
          // Use default position if geolocation fails
        }
      );
    }
  }, []);

  return (
    <div style={{ margin: '20px' }}>
      <h2 style={{ color: '#fff', marginBottom: '15px', fontFamily: "'Poppins', sans-serif", fontWeight: '700', fontSize: '20px' }}>
        Choose From Map
      </h2>
      <MapContainer center={position} zoom={14} style={{ height: '180px', width: '388px', borderRadius: '25px', boxShadow: '0 6px 16px rgba(0,0,0,0.8)' }}>
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mockPlaces.map(place => (
          <Marker key={place.id} position={place.position}>
            <Popup>
              <strong>{place.name}</strong><br />
              {place.type}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapSelector;
