import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from "re-authenticate"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider
    apiKey="42cbab6b-8fae-4fd8-881b-2c51f5e422e9"
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>
);