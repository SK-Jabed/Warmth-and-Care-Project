import React, { useContext } from 'react';
import { authContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Loading from '../pages/Loading/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);

    if (loading) {
      return <Loading></Loading>;
    }

    if (user && user?.email) {
        return children;
    }

    return (
      <div>       
        <Navigate to={"/auth/login"}></Navigate>
      </div>
    );
};

export default PrivateRoute;