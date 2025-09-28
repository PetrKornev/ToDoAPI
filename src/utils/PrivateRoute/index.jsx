import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router';
import { AuthContext } from '../AuthContext';

const PrivateRoute = () => {
  const token = useContext(AuthContext);
  return token ? <Outlet /> : <Navigate to={'/'} />;
};

export default PrivateRoute;
