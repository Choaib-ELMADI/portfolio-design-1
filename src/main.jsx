import React from 'react';
import ReactDOM from 'react-dom/client';

import { StateContext } from './StateContext/StateContext';
import App from './App';
import './index.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <StateContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateContext>
);