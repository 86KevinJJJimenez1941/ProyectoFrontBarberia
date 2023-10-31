import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, ...props }) => {
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <Route {...props} element={isAuthenticated ? element : <Navigate to="/login" />} />
  );
};

export default PrivateRoute;