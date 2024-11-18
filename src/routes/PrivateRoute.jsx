import React, { useContext } from 'react';
import { authContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../pages/Loading/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();

    if (loading) {
      return <Loading></Loading>;
    }

    if (user && user?.email) {
        return children;
    }

    return (
      <div>       
        <Navigate state={location.pathname} to={"/auth/login"}></Navigate>
      </div>
    );
};

export default PrivateRoute;