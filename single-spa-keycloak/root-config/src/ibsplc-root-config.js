import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

//import Keycloak from "keycloak-js";

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

// adding authentication check for my-account

const TOKEN_ID = "access_token";

const getToken = () => {
  if (window.sessionStorage) {
    return window.sessionStorage.getItem(TOKEN_ID);
  }
  return null;
};

window.addEventListener("single-spa:before-routing-event", async (evt) => {
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

/*var keycloak = new Keycloak( );

window.onload = function () {
  console.log(' on load function called ');
  keycloak.init({ onLoad: 'check-sso', silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html' }).success(function () {
      if (keycloak.authenticated) {
        console.log('check says authenticated ');
      } else {
        console.log('check says NOT authenticated ');
      }
  });
}
*/

layoutEngine.activate();
start();
