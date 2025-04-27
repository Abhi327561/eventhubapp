import React, { useState } from 'react';

function Login({ onLogin }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(credentials);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <h4 className="mb-4">Login</h4>
      <input type="text" name="username" value={credentials.username} onChange={handleChange} placeholder="Username" className="form-control mb-3" required />
      <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" className="form-control mb-3" required />
      <button type="submit" className="btn btn-success w-100">Login</button>
    </form>
  );
}

export default Login;
