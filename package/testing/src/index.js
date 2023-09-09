import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from "re-authenticate"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider
      apiKey="3c7d55fd-feb5-4077-8755-8ea59f07336a"
    >
      <App />
    </AuthProvider>
  </React.StrictMode>
);
