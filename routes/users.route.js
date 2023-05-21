const express = require("express");

const db = require("../db");
const routes = express.Router();
const usersController = require("../controllers/users.controller");
const usersValidate = require("../validates/user.validate");
routes.get("/cookie", function (req, res) {
  res.cookie("user-id", 123);
  res.send("hello");
});
console.log("db", db);
routes.get("/", usersController.index);
routes.get("/search", usersController.search);
routes.get("/create", usersController.viewCreate);
routes.get("/:id", usersController.viewDetails);
routes.post("/create", usersValidate.checkCreate, usersController.create);

module.exports = routes;
