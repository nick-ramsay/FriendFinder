var friends = require("../data/friends.js");;

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    console.log(friends.friends[0]);
    return res.json(friends.friends[0]);
  });

  app.post("/api/friends", function (req, res) {
    var newFriend = req.body;
    //console.log(newFriend);
    console.log(res.send);
  });

};