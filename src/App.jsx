import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateEvent from './pages/CreateEvent';
import EventPage from './pages/EventPage';
import AdminPanel from './pages/AdminPanel';
import EditEvent from './pages/EditEvent';
import { EventProvider } from './context/EventContext';

function App() {
  return (
    <EventProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/event/:id" element={<EventPage />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/edit-event/:id" element={<EditEvent />} />
        </Routes>
      </Router>
    </EventProvider>
  );
}

export default App;