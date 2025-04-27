import React from 'react';

function EventForm({ formData, handleChange, handleSubmit, previewImage, buttonLabel }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Event Title" className="form-control mb-3" required />
      <input type="datetime-local" name="date" value={formData.date} onChange={handleChange} className="form-control mb-3" required />
      <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" className="form-control mb-3" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" rows="4" className="form-control mb-3" required></textarea>
      <input type="file" name="image" onChange={handleChange} className="form-control mb-3" accept="image/*" />

      {previewImage && (
        <div className="text-center mb-3">
          <img src={previewImage} alt="Preview" className="img-fluid rounded" style={{ maxHeight: '300px' }} />
        </div>
      )}

      <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="form-control mb-3" required />
      <button type="submit" className="btn btn-success w-100">{buttonLabel}</button>
    </form>
  );
}

export default EventForm;
