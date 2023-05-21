const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/users.route");
const app = express();
const cookieParser = require("cookie-parser");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static("public"));
app.use("/users", userRoutes);

app.listen(3000, function () {
  console.log("Server listening sport 3000");
});
