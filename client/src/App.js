import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import { Boutiques } from './components/home/Boutiques';
import Collection from './components/Collection';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

import { Box } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Box style={{ marginTop: 70 }}>
              <Home />
            </Box>
          </>
        } />
        <Route path="/boutiques" element={<Boutiques />} />
        <Route path="/boutiques/:collection" element={<Collection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
