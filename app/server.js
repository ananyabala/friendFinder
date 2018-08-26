// grabbing the packages we need 
var express = require ("express");
var bodyParser = require ("body-parser");
var path = require ("path");


var app=express();
var port = process.env.PORT||3000;

// FOR POST REQUESTS
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// starting the server
app.listen(port);
console.log('Server started! At http://localhost:'+port);

// TODO:: Need to create an object for friends so that the api route can work