import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuthorization = (WrappedComponent, rolesAllowed, userRole) => {
  return (props) => {
    if (!rolesAllowed.includes(userRole)) {
      return <Navigate to="/unauthorized" replace />;
    }
    return <WrappedComponent {...props} />;
  };
};

export default withAuthorization;
