import React from 'react';
import './App.css';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import App from './App'

function AuthApp() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <>
          <h1>
            Hey {user.username}, welcome to my channel, with auth!
          </h1>
          <button onClick={signOut}>Sign out</button>
          <App/>
        </>
      )}
    </Authenticator>
  );
}

export default AuthApp;
