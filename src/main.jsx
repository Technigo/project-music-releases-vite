import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'; // Adjust the path to your App component

const root = document.getElementById('root');

const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);