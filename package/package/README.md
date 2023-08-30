# `Re-Auth`

Re-Auth is a React library and platform for implementing MongoDB authentication into your application.

The Re-Auth package is extremely simple to use a setup for both React and NextJS!

## Usage

### Installation

```js
npm i re-authenticate
```

### Wrap and configure the provider

To use the re-authenticate package, all you have to do is declare, configure and wrap your app root in it!

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from "re-authenticate"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider
      apiKey="your_api_key_from_re-auth.com"
    >
      <App />
    </AuthProvider>
  </React.StrictMode>
);
```

## Functions

### React hook

After configuring the application you get access to a react hook with all of the auth functions:

```js
import { useAuth } from "re-authenticate";

function App() {
  const { 
    loginUserWithEmailPassword, 
    registerUserWithEmailPassword,
    logoutUser, 
    getUserDetails 
  } = useAuth()

  return (
    <>
      
    </>
  );
}

export default App;
```

### Hook functions

| Function | Description | Type |
| ----- | ----- | ----- |
| loginUserWithEmailPassword | Login in a user that's already in your database using email/password | (email: string, password: string) |
| registerUserWithEmailPassword | Register a new user into your database using email/password | (email: string, password: string) |
| logoutUser | Log out a user that is currently logged in | None |
| getUserDetails | Get the details of a user that is currently in your database | None