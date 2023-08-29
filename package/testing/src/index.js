import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from "re-authenticate"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider
      apiKey="9e38cf35-e8aa-4632-a471-2a3eab35da95"
    >
      <App />
    </AuthProvider>
  </React.StrictMode>
);
