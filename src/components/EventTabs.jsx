import React, { useState } from 'react';
import EventCard from './EventCard';

const trendingEvents = [
  { id: 1, title: 'Victoria', date: '10-06-2025', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
  { id: 2, title: 'Jadu Ghor', date: '15-07-2025', image: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=400&q=80' }
];

const forYouEvents = [
  { id: 3, title: 'Modern Art', date: '20-08-2025', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80' },
  { id: 4, title: 'Sculpture Expo', date: '05-09-2025', image: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=400&q=80' }
];

function EventTabs() {
  const [activeTab, setActiveTab] = useState('trending');

  const events = activeTab === 'trending' ? trendingEvents : forYouEvents;

  return (
    <div style={{ margin: '20px 20px 10px 20px' }}>
      <div style={{ display: 'flex', marginBottom: '15px' }}>
        <button
          onClick={() => setActiveTab('trending')}
          style={{
            flex: 1,
            padding: '12px',
            backgroundColor: activeTab === 'trending' ? '#666' : '#222',
            color: '#fff',
            fontWeight: activeTab === 'trending' ? '700' : '500',
            border: 'none',
            borderRadius: '20px 0 0 20px',
            cursor: 'pointer',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '16px'
          }}
        >
          Trending
        </button>
        <button
          onClick={() => setActiveTab('forYou')}
          style={{
            flex: 1,
            padding: '12px',
            backgroundColor: activeTab === 'forYou' ? '#666' : '#222',
            color: '#fff',
            fontWeight: activeTab === 'forYou' ? '700' : '500',
            border: 'none',
            borderRadius: '0 20px 20px 0',
            cursor: 'pointer',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '16px'
          }}
        >
          For You
        </button>
      </div>
      <div style={{ display: 'flex', overflowX: 'auto', columnGap: '20px' }}>
        {events.map(event => (
          <EventCard key={event.id} image={event.image} title={event.title} date={event.date} />
        ))}
      </div>
    </div>
  );
}

export default EventTabs;
