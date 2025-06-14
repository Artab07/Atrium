import React, { useState, useCallback, useRef } from 'react';
import { GoogleMap, useLoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '300px',
  borderRadius: '10px'
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

function LocationPickerModal({ initialPosition, onClose, onConfirm }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [selectedPosition, setSelectedPosition] = useState({
    lat: initialPosition[0],
    lng: initialPosition[1],
  });

  const [selectedAddress, setSelectedAddress] = useState('');
  const [searchBox, setSearchBox] = useState(null);
  const searchBoxRef = useRef(null);

  const geocoder = React.useRef(null);

  const onLoad = useCallback((ref) => {
    setSearchBox(ref);
    if (!geocoder.current && window.google && window.google.maps) {
      geocoder.current = new window.google.maps.Geocoder();
    }
  }, []);

  const onPlacesChanged = () => {
    if (!searchBox) return;
    const places = searchBox.getPlaces();
    if (!places || places.length === 0) return;
    const place = places[0];
    const location = place.geometry.location;
    setSelectedPosition({ lat: location.lat(), lng: location.lng() });
    setSelectedAddress(place.formatted_address || '');
  };

  const onMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setSelectedPosition({ lat, lng });

    if (geocoder.current) {
      geocoder.current.geocode({ location: { lat, lng } }, (results, status) => {
        if (status === 'OK' && results[0]) {
          setSelectedAddress(results[0].formatted_address);
        } else {
          setSelectedAddress('');
        }
      });
    }
  };

  const handleConfirm = () => {
    onConfirm([selectedPosition.lat, selectedPosition.lng], selectedAddress);
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2000
    }}>
      <div style={{
        width: '90%',
        maxWidth: '400px',
        backgroundColor: '#222',
        borderRadius: '15px',
        padding: '15px',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h3>Select Location</h3>
        <StandaloneSearchBox
          onLoad={onLoad}
          onPlacesChanged={onPlacesChanged}
        >
          <input
            type="text"
            placeholder="Search location"
            ref={searchBoxRef}
            style={{
              boxSizing: 'border-box',
              border: '1px solid transparent',
              width: '100%',
              height: '40px',
              padding: '0 12px',
              borderRadius: '3px',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
              fontSize: '16px',
              outline: 'none',
              textOverflow: 'ellipses',
              marginBottom: '10px',
            }}
          />
        </StandaloneSearchBox>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={14}
          center={selectedPosition}
          options={options}
          onClick={onMapClick}
        >
          <Marker position={selectedPosition} draggable={true} onDragEnd={onMapClick} />
        </GoogleMap>
        <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <button onClick={onClose} style={{
            backgroundColor: '#555',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 20px',
            color: '#fff',
            cursor: 'pointer'
          }}>Cancel</button>
          <button onClick={handleConfirm} style={{
            backgroundColor: '#4a90e2',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 20px',
            color: '#fff',
            cursor: 'pointer'
          }}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default LocationPickerModal;