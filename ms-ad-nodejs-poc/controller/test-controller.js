var express = require('express');
var router = express.Router();
const keycloak = require('../config/keycloak-config.js').getKeycloak();

router.get('/anonymous', function(req, res){
    res.send("Hello Anonymous");
});

router.get('/user', keycloak.protect('user-role'), function(req, res){
    res.send("Hello User");
});

router.get('/admin', keycloak.protect('admin-role'), function(req, res){
    res.send("Hello Admin");
});

router.get('/all-user-new', keycloak.protect(['app-api-access']), function(req, res){
    res.send("Hello All User New New New ");
});

router.get('/check-sso', keycloak.checkSso(), function(req, res){
    res.send("Check-SSO-Success");
});

module.exports = router;