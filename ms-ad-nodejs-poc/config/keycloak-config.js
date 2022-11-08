
var session = require('express-session');
var Keycloak = require('keycloak-connect');

let _keycloak;

/*var keycloakConfig = {
    clientId: 'my-nodejs-client',
    bearerOnly: true,
    serverUrl: 'http://localhost:3000',
    realm: 'My-Realm',
    credentials: {
        secret: '62c99f7c-da55-48fb-ae4e-a27f132546b7'
    }
};*/

/*const keycloakConfig = {
    clientId: 'express-backend',
    bearerOnly: true,
    serverUrl: 'http://localhost:8080/',
    realm: 'Compass-azure',
    realmPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAt/LmwRWB1ER06HDI0X/nFtImyKRb/Rz6jkK3VnlcxrSpdJEwy07Wo2Gh9JYJ4KrEhpfEUGPqe60q1A5NcPbpQwr2Pb8tzfqaq8z1XTAc5PzeIiBWUUiENCUU2dtc4OCxW7VrsbVC6jVcrpKxO/nkRp4n76JBOuV6Gepye5pWk0Zikt5OYxz93a3sZIA7mL/96GvmTfVn/QedmsVnvgrA0p24s9lzijPbzQheWAikNXsKT2dQ3Wi6WBB9XhMokEsK0dkjA/kszrIB6FDH4eFeW62OENDpGjM4HE9x5mTbpPoEOytOwi2UZpWJh0qV4OxMQOYp3+Nd34Eh7CwuhMI/3wIDAQAB'
};*/

const keycloakConfig = {
    clientId: 'microfrontend-bff-client',
    bearerOnly: true,
    serverUrl: 'http://localhost:8080/',
    realm: 'Microfrontend-poc-realm',
    realmPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3rpXm7BxL7ET4HwQgBxXKgF4Bz/oJld8a6iiBJNgx3AN9gAUohTi4Ytu6MMstiSlrwzvQyxETNyP3897Cyf4oUntOdiaWWygi6Mps5cMAyLlm5e95b+9g1taMqPwFhi0lzyR1YhJM5FJp9igsZKq3318pED5N8biWhh+lHmFajNuBeXzljftZC6Trzu1ioOaYcHXcOnO5ICzNbW2s6KN52o0EZEltZMN4ynghjV/wqdCoWbBFVyariYEF6zXQgzPgSvc2pS67DBO+NpIHvbeS/VjkHklSGeLCCYhudQZ6fievyM0jwLVFkLOCJmbeBXRDsuUCR1uoSdoRSPWnTlhRQIDAQAB'
};

function initKeycloak() {
    if (_keycloak) {
        console.warn("Trying to init Keycloak again!");
        return _keycloak;
    } 
    else {
        console.log("Initializing Keycloak...");
        var memoryStore = new session.MemoryStore();
        _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
        return _keycloak;
    }
}

function getKeycloak() {
    if (!_keycloak){
        console.error('Keycloak has not been initialized. Please called init first.');
    } 
    return _keycloak;
}

module.exports = {
    initKeycloak,
    getKeycloak
};