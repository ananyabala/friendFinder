var friends = require("../data/friends");
// var newSurvey = require("../public/survey.html");

module.exports = function (app) {

  // * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });


  // * A POST route `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
  // Create New Friends - takes in JSON input
  app.post("/api/friends",
    function (req, res) {
      console.log(req.body)
    });

};








