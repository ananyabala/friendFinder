// Requiring path

var path = require("path");


// Building out routes to display the view-layer to the routes specified 
module.exports = function (app) {

  // For the home route :: localhost:+port
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  // For the route where the survey form will exist
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found default to home
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
}




