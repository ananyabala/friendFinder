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
      var newFriend = req.body;
      friends.push(req.body);
      res.json(true);
      var totalScore = "";
      // App Logic on Finding a Friend
      var difference = 0;
      var alldiff = []
      // Applying the following code to all friends pushed into the 'friends' object
      for (var i = 0; i < friends.length; i++) {

        // Comparing the current array with all of the arrays in the friends object
        for (j = 0; j < 8; j++) {
          // var difference = console.log(difference(scores, friends.scores));
          difference += Math.abs(friends[i].scores[j] - newFriend.scores[j]);


        };
        alldiff.push(difference)
        console.log("AD:" + alldiff);
        difference = 0;
        // This is the array where the difference between two arrays will be stored
      }
      var bestmatch = friends[alldiff.indexOf(Math.min.apply(null, alldiff))];
      console.log(bestmatch);
      res.send(bestmatch);
      
    });

};








