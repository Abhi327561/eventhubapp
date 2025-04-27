import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { EventContext } from '../context/EventContext';

function EventPage() {
  const { id } = useParams();
  const { events } = useContext(EventContext);

  const event = events.find(e => e.id === parseInt(id));

  if (!event) return <div className="text-center mt-5">Event not found.</div>;

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center mb-4">{event.title}</h2>
      <img src={event.image} alt={event.title} className="img-fluid rounded mb-3" style={{ maxHeight: '400px' }} />
      <div className="card p-4">
        <h3>{event.title}</h3>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Date & Time:</strong> {new Date(event.date).toLocaleString()}</p>
        <p><strong>Description:</strong> {event.description}</p>
        <p><strong>Entry Fee:</strong> {event.price}</p>
      </div>
    </div>
  );
}

export default EventPage;