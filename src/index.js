import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log('pos1');
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('pos2');
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
