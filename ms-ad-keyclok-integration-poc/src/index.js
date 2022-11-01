import * as React from 'react'
import ReactDOM from 'react-dom'

import { ReactKeycloakProvider } from '@react-keycloak/web'

import keycloak from './keycloak'
import { AppRouter } from './routes'
import * as serviceWorker from './serviceWorker'

import './index.css'

const eventLogger = (event, error) => {
  console.log('onKeycloakEvent', event, error)
}

const tokenLogger = (tokens) => {
  console.log('onKeycloakTokens', tokens)
}

ReactDOM.render(
  <React.StrictMode>
  <ReactKeycloakProvider
    authClient={keycloak}
    initOptions={{___onLoad: 'check-sso' , onLoad: 'login-required' , silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html' , redirectUri : 'http://localhost:3000/landingpage' }}
    onEvent={eventLogger}
    onTokens={tokenLogger}
  >
    <AppRouter />
  </ReactKeycloakProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
