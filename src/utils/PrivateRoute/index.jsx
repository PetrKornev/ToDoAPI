import { Outlet, Navigate } from 'react-router';

const PrivateRoute = () => {
  return localStorage.getItem('token') ? <Outlet /> : <Navigate to={'/'} />;
};

export default PrivateRoute;
