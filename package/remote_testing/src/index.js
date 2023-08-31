import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from "re-authenticate"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider
    apiKey="9efdf9b0-dcfd-4614-822b-dc3408813f85"
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>
);
