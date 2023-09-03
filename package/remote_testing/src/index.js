import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from "re-authenticate"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider
    apiKey="893a6843-b6f1-436a-a039-c8fb0449c0fc"
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>
);