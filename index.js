const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", function (req, res) {
  res.render("index", {
    name: "PonPeo",
  });
});

const users = [
  { id: "1", name: "bon" },
  { id: "2", name: "beo" },
];

app.get("/users", function (req, res) {
  res.render("users/index", {
    users: users,
  });
});

app.get("/users/search", function (req, res) {
  const textSearch = req.query.q;
  const matchedUser = users.filter(
    (user) => user.name.indexOf(textSearch) !== -1
  );

  res.render("users/index", {
    users: matchedUser,
  });
});

app.get("/users/create", function (req, res) {
  res.render("users/create");
});

app.post("/users/create", function (req, res) {
  users.push({ id: users.length + 1, ...req.body });
  res.redirect("/users");
});

app.listen(3000, function () {
  console.log("Server listening sport 3000");
});
