import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookTicketPage from './pages/BookTicketPage';
import TicketHistoryPage from './pages/TicketHistoryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book-ticket" element={<BookTicketPage />} />
        <Route path="/ticket-history" element={<TicketHistoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
