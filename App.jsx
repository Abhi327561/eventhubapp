import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateEvent from './pages/CreateEvent';
import EventPage from './pages/EventPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import SelectVenue from './pages/SelectVenue';
import { EventProvider } from './context/EventContext';
import AdminPanel from './pages/AdminPanel';
function App() {
  return (
    <EventProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/event/:id" element={<EventPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/select-venue" element={<SelectVenue />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Router>
    </EventProvider>
  );
}

export default App;