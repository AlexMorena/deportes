import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PadreDeportes from './components/PadreDeportes';
import PadreVideojuegos from './components/PadreVideojuegos';
import PadreMenu from './components/PadreMenu';
import Comics from './components/Comics';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PadreDeportes />
    <h3>-------------------------------</h3>
    <PadreVideojuegos />
    <h3>-------------------</h3>
    <PadreMenu />
    <h3>-------------------</h3>
    <Comics />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
