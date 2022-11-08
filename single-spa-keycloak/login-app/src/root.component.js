import { ReactKeycloakProvider } from "@react-keycloak/web";

import keycloak from "./keycloak";

import { useKeycloak } from '@react-keycloak/web'

const eventLogger = (event, error) => {
  console.log("onKeycloakEvent", event, error);
};

const tokenLogger = (tokens) => {
  console.log("onKeycloakTokens", tokens);
  if( tokens.token ) {
    saveToken(tokens.token);
  }
};

const TOKEN_ID = "access_token"

const saveToken = (idtoken) => {
  if (window.sessionStorage) {
      window.sessionStorage.setItem(TOKEN_ID, idtoken);
  }
};

export default function Root(props) {

  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={{
        onLoad: "login-required",
        redirectUri: "http://localhost:9000/app/home",
      }}
      onEvent={eventLogger}
      onTokens={tokenLogger}
    >
      <Content />
    </ReactKeycloakProvider>
  );

  /*return <section>{props.name} is mounted!</section>*/
}

function Content( props ) {
  const { initialized } = useKeycloak()

  if (!initialized) {
    return <div>Loading...</div>
  }

  <section>{props.name} is mounted!</section>
}