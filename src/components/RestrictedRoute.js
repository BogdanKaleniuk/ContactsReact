import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
<<<<<<< HEAD
=======

>>>>>>> 464a808e06d48a53626d4cca498559177f0981db
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
