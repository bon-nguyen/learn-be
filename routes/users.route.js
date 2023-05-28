const express = require("express");

const db = require("../db");
const routes = express.Router();
const usersController = require("../controllers/users.controller");
const usersValidate = require("../validates/user.validate");

// middleware
// const authMiddleware = require("../middleware/auth.middleware");
const authMiddleware = require("../middleware/auth.middleware");

console.log("db", db);
routes.get("/", authMiddleware.requireAuth, usersController.index);
routes.get("/search", authMiddleware.requireAuth, usersController.search);
routes.get("/create", authMiddleware.requireAuth, usersController.viewCreate);
routes.get("/:id", authMiddleware.requireAuth, usersController.viewDetails);
routes.post(
  "/create",
  authMiddleware.requireAuth,
  usersValidate.checkCreate,
  usersController.create
);

module.exports = routes;
