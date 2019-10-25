module.exports = function (app) {
  var friends = require("../data/friends.js");
  var path = require("path");
  var bodyParser = require('body-parser')

  app.get("/api/friends", function (req, res) {
    console.log(friends.friends[0]);
    return res.json(friends.friends[0]);
  });

  app.post("/api/friends", function (req,res) {
    // console.log(req);
    var newFriendData = req.body;
    console.log(req.body);
    // console.log(newFriendData);
    // console.log("apiRoutes.js post...");
    res.send(req.data)
  });

};