import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import { Layout } from './Layout';
=======
>>>>>>> 464a808e06d48a53626d4cca498559177f0981db
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
<<<<<<< HEAD
=======
import { Layout } from './Layuot';
>>>>>>> 464a808e06d48a53626d4cca498559177f0981db

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
<<<<<<< HEAD
const TasksPage = lazy(() => import('../pages/ContactsPage'));
=======
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
>>>>>>> 464a808e06d48a53626d4cca498559177f0981db

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
<<<<<<< HEAD
            <PrivateRoute redirectTo="/login" component={<TasksPage />} />
=======
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
>>>>>>> 464a808e06d48a53626d4cca498559177f0981db
          }
        />
      </Route>
      <Route path="*" element={<Layout />} />
    </Routes>
  );
};
