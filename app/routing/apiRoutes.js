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

      friends.push(req.body);
      res.json(true);
      var totalScore = "";
      // App Logic on Finding a Friend

      // Applying the following code to all friends pushed into the 'friends' object
      for (var i = 0; i < friends.length; i++) {

        // Comparing the current array with all of the arrays in the friends object
        for (j = 0; j < friends.length; j++) {
          var difference = console.log(difference(scores, friends.scores));
          console.log(sum());
          

        };
        // This is the array where the difference between two arrays will be stored
        
  
      }
      var difference = [];
      function difference(array1,array2) {
        for (var i = 0; i < scores.length; i++) {
          difference.push(array1 - array2);
          console.log(difference);
        }
      }

      function sum() {
        var sum = 0;
        for (var i = 0; i < difference.length; i++) {
          sum += difference[i];
        }
      }

      // Modal Code here... ? 

    });
};


  // taken from Stack Overflow





