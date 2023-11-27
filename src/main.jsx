import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import your CSS file here
import App from './components/App';

const root = document.getElementById('root');

const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);