import { ReactKeycloakProvider } from "@react-keycloak/web";

import keycloak from "./keycloak";

import { useKeycloak } from "@react-keycloak/web";

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
         redirectUri: "http://localhost:9000/app/my-account",
       }}
       onEvent={eventLogger}
       onTokens={tokenLogger}
     >
       <Content />
     </ReactKeycloakProvider>
   );
 
   return <Content />
 }

 function Content(props) {
  const { initialized , keycloak } = useKeycloak();

  console.log(' authenticated ', keycloak );

  if (!initialized) {
    return <div>Loading...</div>;
  }

  return <div>{`Is Authenticated ${keycloak.authenticated}`} </div>   ;
}