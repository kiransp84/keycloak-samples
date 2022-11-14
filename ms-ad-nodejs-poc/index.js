var express = require('express');
var cors = require('cors');

var app = express();

app.use(cors());

const keycloak = require('./config/keycloak-config.js').initKeycloak();
app.use(keycloak.middleware());


const testController = require('./controller/test-controller.js');
app.use('/test', testController);


const loginController = require('./controller/login-controller.js');
app.use('/secure', loginController);


app.get('/', function(req, res){
   res.send("Server is up!");
});

app.listen(3030);