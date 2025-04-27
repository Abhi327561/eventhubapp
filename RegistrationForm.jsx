import React, { useState } from 'react';

function RegistrationForm({ onRegister }) {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded">
      <h5>Register for Event</h5>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="form-control mb-3" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="form-control mb-3" required />
      <button type="submit" className="btn btn-primary w-100">Register</button>
    </form>
  );
}

export default RegistrationForm;
