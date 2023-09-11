import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from "re-authenticate"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider
    apiKey="23f986e4-1df5-4301-84c3-cf3bf0005071"
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>
);