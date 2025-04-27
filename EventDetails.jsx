import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { EventContext } from '../context/EventContext';
import Navbar from './Navbar';
import Footer from './Footer';

function EventDetails() {
  const { id } = useParams();
  const { events } = useContext(EventContext);
  const event = events.find(e => e.id === parseInt(id));

  if (!event) return <div className="text-center mt-5">Event not found.</div>;

  return (
    <>
      <Navbar />
      <div className="container mt-5 pt-5">
        <h2 className="text-center mb-4">{event.title}</h2>
        <img src={event.image} alt={event.title} className="img-fluid rounded mb-4" />
        <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Price:</strong> {event.price}</p>
        <p>{event.description}</p>
      </div>
      <Footer />
    </>
  );
}

export default EventDetails;
