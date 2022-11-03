import { ReactKeycloakProvider } from "@react-keycloak/web";

import keycloak from "./keycloak";

import { useKeycloak } from "@react-keycloak/web";

import Link from "./Link";

const eventLogger = (event, error) => {
  console.log("onKeycloakEvent", event, error);
};

const tokenLogger = (tokens) => {
  console.log("onKeycloakTokens", tokens);
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
}

function Content(props) {
  const { initialized } = useKeycloak();

  if (!initialized) {
    return <div>Loading...</div>;
  }

  return <Link />;
}
