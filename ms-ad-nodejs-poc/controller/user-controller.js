var express = require('express');
var router = express.Router();
const keycloak = require('../config/keycloak-config.js').getKeycloak();


router.post('/menu', keycloak.checkSso(), function(req, res){
    /*
    * it enters here means the token is valid and user is authenticated 
    * */
    res.json(
        {
            items : [ "about" , "events" , "annual" , "team" , "/sign-up" , "signin" ]
        }
    );
});

module.exports = router;