import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/auth/Login', { email, password });
      console.log('Login successful');
      alert('Login Successful');
      navigate('/');
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };
  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="card w-50">
        <div className="card-body bg-warning">
          <h2 className="card-title text-center">Login</h2>
          <form onSubmit={handleSubmit}>
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
            </div><center>
            <button type="submit" className="btn btn-primary ">Login</button></center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;