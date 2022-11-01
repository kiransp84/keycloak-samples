import * as React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { useKeycloak } from '@react-keycloak/web'


export function PrivateRoute({
  component,
  ...rest
}) {
  const { keycloak } = useKeycloak()
  const Component = component;

  return (
    <Route
      {...rest}
      render={(props) =>
        ( keycloak && keycloak.authenticated ) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}
