import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
<<<<<<< HEAD
=======

>>>>>>> 464a808e06d48a53626d4cca498559177f0981db
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
