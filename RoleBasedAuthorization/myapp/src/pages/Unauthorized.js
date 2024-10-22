import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => (
  <div className="page">
    <h1>Unauthorized Access</h1>
    <p>You don't have permission to view this page.</p>
    <Link to="/">Go to Home</Link>
  </div>
);

export default Unauthorized;
