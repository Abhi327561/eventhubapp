import React, { useContext } from 'react';
import { EventContext } from '../context/EventContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function AdminPanel() {
  const { events, setEvents } = useContext(EventContext);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this event?");
    if (confirmDelete) {
      const updatedEvents = events.filter(event => event.id !== id);
      setEvents(updatedEvents);
      localStorage.setItem('events', JSON.stringify(updatedEvents)); // Update localStorage too
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5 pt-5">
        <h2 className="text-center mb-4">Admin Panel - Manage Events</h2>
        
        {events.length === 0 ? (
          <div className="text-center">
            <p>No events available.</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Price</th>
                  <th>Followers</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {events.map(event => (
                  <tr key={event.id}>
                    <td>{event.id}</td>
                    <td>{event.title}</td>
                    <td>{new Date(event.date).toLocaleString()}</td>
                    <td>{event.location}</td>
                    <td>{event.price}</td>
                    <td>{event.followers}</td>
                    <td>
                      <button onClick={() => handleDelete(event.id)} className="btn btn-danger btn-sm">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default AdminPanel;
