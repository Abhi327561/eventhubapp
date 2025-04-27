import React, { useContext, useState } from 'react';
import { EventContext } from '../context/EventContext';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  const { events } = useContext(EventContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'All' || event.title.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <div className="container mt-5 pt-5">
        <h2 className="text-center mb-4">Explore Events</h2>

        {/* Search Bar */}
        <div className="input-group mb-4">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search events by name, location, or description..." 
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        {/* Category Buttons */}
        <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
          {['All', 'Hackathon', 'Cultural', 'Food', 'Expo', 'Games'].map(category => (
            <button 
              key={category} 
              className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Event Cards */}
        <div className="row">
          {filteredEvents.length > 0 ? filteredEvents.map(event => (
            <div className="col-md-4 mb-4" key={event.id}>
              <div className="card shadow-sm">
                <Link to={`/event/${event.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <img src={event.image} className="card-img-top" alt={event.title} />
                  <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                    <p>{new Date(event.date).toLocaleString()}</p>
                    <p>{event.location}</p>
                    <h6 className="fw-bold">From {event.price}</h6>
                    <p className="text-muted">{event.followers} followers</p>
                  </div>
                </Link>
              </div>
            </div>
          )) : (
            <div className="text-center">
              <p>No events found matching your search.</p>
            </div>
          )}
        </div>

        <div className="text-center mt-4">
          <Link to="/create-event" className="btn btn-success">Create New Event</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
