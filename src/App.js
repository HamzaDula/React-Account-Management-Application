// src/App.js
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <div>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} />} />
        <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} setUser={setUser} />} />
        <Route path="/account" element={<Account isAuthenticated={isAuthenticated} user={user} />} />
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} />} />
      </Routes>
    </div>
  );
};

export default App;
