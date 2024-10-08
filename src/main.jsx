import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/src/components/App/App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);