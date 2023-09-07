import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from "re-authenticate"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider
    apiKey="db90ec50-fb2e-4947-9cb7-179842565e30"
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>
);