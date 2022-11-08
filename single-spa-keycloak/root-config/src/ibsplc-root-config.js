import { registerApplication, start, navigateToUrl } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

// authentication access token before loading any microfront end --NOT TESTED FULLY
import { validateAccessToken } from "./utils";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});

const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);

const TOKEN_ID = "access_token";

const getToken = () => {
  if (window.sessionStorage) {
    return window.sessionStorage.getItem(TOKEN_ID);
  }
  return null;
};

window.addEventListener("ICO_EVT:HOME_SCREEN", (evt) => {
  navigateToUrl("/#/app/home");
});

window.addEventListener("single-spa:before-routing-event", async (evt) => {
  if (window.hasKeycloakInitialized) {
    if (window.keycloak.authenticated) {
      console.log("check says authenticated ");
    } else {
      console.log("check says NOT authenticated ");
    }
  } else {
    console.log(" global keycloak hasnot been initialized ");
  }

  const { newUrl } = evt.detail;
  const token = getToken();
  console.log(" single-spa:before-routing-event  token ", token);
  if (!newUrl.endsWith("/login")) {
    if (token === null) {
      console.log("token not present : navigating to login ");
      //To-Do
      //showLogin();
      return;
    }

    let authenticated = false;
    try {
      const data = await validateAccessToken(token);
      console.log(" validateAccessToken response ", data);
    } catch (e) {
      authenticated = false;
      console.error(" validateAccessToken errors ", e);
    }
  }
});

layoutEngine.activate();
start();
