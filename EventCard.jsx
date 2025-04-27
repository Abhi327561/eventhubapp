import React from 'react';
import { Link } from 'react-router-dom';

function EventCard({ event }) {
  return (
    <div className="card shadow-sm mb-4">
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
  );
}

export default EventCard;
