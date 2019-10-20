var express = require("express");
var path = require("path");

var friends = require("../data/friends.js");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/friends", function(req, res) {
    console.log(friends.friends[0]);
    return res.json(friends.friends[0]);
  });

  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});