const express = require("express");
const app = express();
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", function (req, res) {
  res.render("index", {
    name: "PonPeo",
  });
});

app.get("/user", function (req, res) {
  res.render("users/index", {
    users: [
      { id: "1", name: "bon" },
      { id: "2", name: "beo" },
    ],
  });
});

app.listen(3000, function () {
  console.log("Server listening sport 3000");
});
