import React, { useState, useContext } from 'react';
import { EventContext } from '../context/EventContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function CreateEvent() {
  const { addEvent } = useContext(EventContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
    image: '',
    price: '',
    followers: '0'
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files.length) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, image: reader.result });
        setPreviewImage(reader.result);  // Set the image preview
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(formData);
    setSuccessMessage('🎉 Event Created Successfully!');
    setTimeout(() => {
      navigate('/');
    }, 2000); // Wait for 2 seconds before redirecting
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5 pt-5">
        <h2 className="text-center mb-4">Create Your Event</h2>
        
        {successMessage && (
          <div className="alert alert-success text-center" role="alert">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text" className="form-control" name="title" placeholder="Event Name" value={formData.title} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <input type="datetime-local" className="form-control" name="date" value={formData.date} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <textarea className="form-control" name="description" placeholder="Event Description" rows="4" value={formData.description} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <input type="file" className="form-control" name="image" onChange={handleChange} accept="image/*" required />
          </div>

          {/* Image Preview */}
          {previewImage && (
            <div className="text-center mb-3">
              <img src={previewImage} alt="Preview" className="img-fluid rounded" style={{ maxHeight: '300px' }} />
            </div>
          )}

          <div className="mb-3">
            <input type="text" className="form-control" name="price" placeholder="Entry Fee (e.g. Rs.150)" value={formData.price} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Create Event</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default CreateEvent;
