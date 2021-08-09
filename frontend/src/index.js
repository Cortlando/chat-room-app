import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";



ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-nlvqxf6y.us.auth0.com"
      clientId="r1G0n8EYBmhazRHNk2fOPUteJbRleISB"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

