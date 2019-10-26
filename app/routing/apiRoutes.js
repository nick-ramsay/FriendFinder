module.exports = function (app) {
  var friends = require("../data/friends.js");
  var path = require("path");

  app.get("/api/friends", function (req, res) {
    return res.json(friends.friends);
  });

  app.post("/api/friends", function (req, res) {
    var newFriendData = req.body;
    var optimalFriend = -1;
    var optimalFriendScore = 0;
    var currentFriendScore;
    for (i = 0; i < friends.friends.length; i++) {
      currentFriendScore = 0;
      for (s = 0; s < friends.friends[i].scores.length; s++) {
        currentFriendScore += Math.abs(friends.friends[i].scores[s] - newFriendData.newFriend.scores[s]);
        //currentFriendScore += friends.friends[i].scores[s];
      };
      switch (i) {
        case 0:
          optimalFriend = i;
          optimalFriendScore = currentFriendScore;
          break;
        default:
          switch (currentFriendScore < optimalFriendScore) {
            case true:
              optimalFriend = i;
              optimalFriendScore = currentFriendScore;
              break;
          };
      };
    };
    res.json(friends.friends[optimalFriend]);
  });

};