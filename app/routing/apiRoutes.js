var friends = require("../data/friends");
// var newSurvey = require("../public/survey.html");



module.exports = function (app) {

  // * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });


  // * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
  // Create New Friends - takes in JSON input
  app.post("/api/friends", 
  function (req, res) {
    // // req.body hosts is equal to the JSON post sent from the user
    // // This works because of our body-parser middleware
    // var newSurvey = req.body;

    // console.log(newSurvey);

    // // We then add the json the user sent to the friends array
    // friends.push(newSurvey);

    // // Adding the new object to the friends array 


    // // We then display the JSON to the users
    // res.json(newSurvey);

    // ***************

    friends.push(req.body);
    console.log(friends);
    console.table(friends);

    // ***************
  });

  // app.post("/api/tables", function(req, res) {
  //   // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
  //   // It will do this by sending out the value "true" have a table
  //   // req.body is available since we're using the body-parser middleware
  //   if (tableData.length < 5) {
  //     tableData.push(req.body);
  //     res.json(true);
  //   }
  //   else {
  //     waitListData.push(req.body);
  //     res.json(false);
  //   }
  // });
};

