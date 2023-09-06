import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from "re-authenticate"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider
      apiKey="39d23102-044f-4d34-95bc-3d8627d2394c"
    >
      <App />
    </AuthProvider>
  </React.StrictMode>
);
