import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import axios from 'axios';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

const logout = () => {
  axios
    .post("http://localhost:5000/api/logout", { userToken: localStorage.getItem('token') })
    .then((res) => {
      localStorage.removeItem("token");
      window.location.href = "/login";
    })
    .catch((err) => console.log(err));
};

function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/friends">Friends</Link></li>
        <li><Link to="/friends/add">Add Friends</Link></li>
        <li><Link to="/">Login</Link></li>
        <li><Link onClick={logout} to="/logout">Logout</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/logout" element={<Login />} />
        <Route path="/friends" element={localStorage.getItem("token") ? <FriendsList /> : <Navigate to="/" />} />
        <Route path="/friends/add" element={localStorage.getItem("token") ? <AddFriend /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}


export default App;
