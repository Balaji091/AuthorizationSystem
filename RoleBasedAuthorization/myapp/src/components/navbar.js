// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './navbar.css';

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/editor">Editor</Link>
        </li>
        <li>
          <Link to="/viewer">Viewer</Link>
        </li>
      </ul>
      <div className="auth-buttons">
        {currentUser ? (
          <>
            <span>{`Hello, ${currentUser.name}`}</span>
            <button className="logout" onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">
            <button className="login">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
