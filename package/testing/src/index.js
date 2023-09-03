import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from "re-authenticate"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider
      apiKey="481c0625-4746-440f-b1bd-de4d7daac845"
    >
      <App />
    </AuthProvider>
  </React.StrictMode>
);
