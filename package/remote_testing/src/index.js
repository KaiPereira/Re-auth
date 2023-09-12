import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from "re-authenticate"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider
    apiKey="c2bdac0c-58bb-49fd-ad84-4a196b256cc0"
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>
);