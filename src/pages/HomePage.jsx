import React from 'react';
import LocationSearch from '../components/LocationSearch';
import FeaturedBanner from '../components/FeaturedBanner';
import AtriumAi from '../components/AtriumAi';
import EventTabs from '../components/EventTabs';
import QuickActions from '../components/QuickActions';
import MapSelector from '../components/MapSelector';
import BottomNav from '../components/BottomNav';

function HomePage() {
  return (
    <div style={{
      backgroundColor: '#000',
      color: '#fff',
      width: '428px',
      height: '926px',
      margin: '0 auto',
      paddingBottom: '60px',
      fontFamily: "'Poppins', sans-serif",
      overflowY: 'auto',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      position: 'relative'
    }}>
      <LocationSearch />
      <FeaturedBanner />
      <AtriumAi />
      <EventTabs />
      <QuickActions />
      <MapSelector />
      <BottomNav />
    </div>
  );
}

export default HomePage;
