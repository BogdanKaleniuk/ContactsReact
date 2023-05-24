import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import 'modern-normalize';
import './index.css';
=======
import './index.css';
import { ThemeProvider } from 'styled-components';
// import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';
import { theme } from './theme';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react';
>>>>>>> 464a808e06d48a53626d4cca498559177f0981db

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
<<<<<<< HEAD
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
=======
        <BrowserRouter basename="/goit-react-hw-07-phonebook">
>>>>>>> 464a808e06d48a53626d4cca498559177f0981db
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
