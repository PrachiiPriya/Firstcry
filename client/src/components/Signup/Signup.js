import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/auth/Signup', { name, email, password });
      console.log(response.data);
      alert('signup successful');
      navigate('/login');
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="container mt-5">
      <div className='row'>
        <div className='col-md-3 col-lg-3'></div>
        <div className='col-md-6 col-lg-6 justify-content-center align-items-center'>
      <div className="card">
        <div className="card-body bg-warning" >
          <center>
          <h2 className="card-title">Signup</h2></center>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Signup</button>
          </form>
          <button className="btn btn-link mt-3" onClick={() => navigate('/login')}>
            Already have an account? Login
          </button>
        </div>
        </div>
        <div className='col-md-3 col-lg-3'></div>
      </div></div>
    </div>
  );
};

export default Signup;