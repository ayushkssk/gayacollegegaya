import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/pages/login" element={<Login />} />
        <Route path="/pages/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
