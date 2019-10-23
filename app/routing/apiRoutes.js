var friends = require("../data/friends.js");;

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    console.log(friends.friends[0]);
    return res.json(friends.friends[0]);
  });

  app.post("/api/friends", function (req,res) {
    var newFriendData = req.body;
    console.log(req.body);
    console.log("apiRoutes.js post...");
    console.log(newFriendData);
    friends.friends.push(newFriendData);
    //friends.friends.push("Push works!");
    console.log(friends.friends);
    return res.json(newFriendData);
  });

};