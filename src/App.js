import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/friends">Friends</Link></li>
        <li><Link to="/friends/add">Add Friends</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/logout" element={<Login />} />
        <Route path="/friends" element={<FriendsList />} />
        <Route path="/friends/add" element={<AddFriend />} />
      </Routes>
    </div>
  );
}

export default App;
