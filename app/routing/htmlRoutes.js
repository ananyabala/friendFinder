// Requiring path

var path = require("path");

module.exports = function (app) {
    // // * A GET Route to `/survey` which should display the survey page.
    // app.get('/survey', function (req, res) {
    //     var newSurvey = req.params.survey;
    //     res.send(newSurvey);
    // });

    // // * A default, catch-all route that leads to `home.html` which displays the home page. 
    // app.get("/", function (req, res) {
    //     res.send("Welcome to the Friend Finder!");
    // });



    // TRY 2
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
    
      app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
      });
    
      // If no matching route is found default to home
      app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
}



