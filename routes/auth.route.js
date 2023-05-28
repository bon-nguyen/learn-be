const express = require("express");

const db = require("../db");
const routes = express.Router();

const loginController = require("../controllers/auth.controller");

routes.get("/login", loginController.login);
routes.post("/login", loginController.postLogin);

module.exports = routes;
