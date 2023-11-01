import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/logout">Logout</Link></li>
        <li><Link to="/friends">Friends</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/logout" element={<Login />} />
        <Route path="/friends" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
