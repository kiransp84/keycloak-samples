var express = require('express');
var router = express.Router();
const keycloak = require('../config/keycloak-config.js').getKeycloak();


router.post('/loginUser', keycloak.checkSso(), function(req, res){
    /*
    * it enters here means the token is valid and user is authenticated 
    * */
    res.json(
        {
            "status":"LOGIN_SUCCESS",
            "firstName":"Kiran",
            "lastName":"Sasibhooshan",
            "defaultStation":"CDG",
            "roleGroupCode":"ARLADM"
        }
    );
});

module.exports = router;