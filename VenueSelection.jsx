import React from 'react';

function VenueSelection({ venues, selectedVenue, setSelectedVenue }) {
  return (
    <div className="mb-3">
      <label className="form-label">Select Venue</label>
      <select 
        className="form-select" 
        value={selectedVenue} 
        onChange={(e) => setSelectedVenue(e.target.value)}
        required
      >
        <option value="">Choose a venue</option>
        {venues.map(venue => (
          <option key={venue.id} value={venue.name}>
            {venue.name} - {venue.location}
          </option>
        ))}
      </select>
    </div>
  );
}

export default VenueSelection;
