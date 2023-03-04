import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Toaster } from 'react-hot-toast';


ReactDOM.render(
  <React.StrictMode>
    <Toaster position='top-right' />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

