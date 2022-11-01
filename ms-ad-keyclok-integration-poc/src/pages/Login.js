import * as React from 'react'
import { useCallback } from 'react'
import { Redirect, useLocation } from 'react-router-dom'

import { useKeycloak } from '@react-keycloak/web'

import axiosInstance from '../interceptor';

const LoginPage = () => {
  const location = useLocation()
  const currentLocationState = location.state || {
    from: { pathname: '/home' },
  }

  const { keycloak } = useKeycloak()

  const login = useCallback(() => {
    if(keycloak) keycloak.login()
  }, [keycloak])

  if (keycloak && keycloak.authenticated){
    window.localStorage.setItem('accessToken', keycloak.token ); 

    return <Redirect to={ currentLocationState ? currentLocationState.from : undefined } />
  }
    

  return (
    <div>
      <button type="button" onClick={login}>
        Login
      </button>
    </div>
  )
}

export default LoginPage
