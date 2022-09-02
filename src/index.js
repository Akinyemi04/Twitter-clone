import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Components/store';
import { Provider } from 'react-redux';
//import {BrowserRouter as Router}  from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode >
      <App />
    </React.StrictMode>
  </Provider>
);


reportWebVitals();
