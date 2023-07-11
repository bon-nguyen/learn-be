const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "./public/upload/" });

const db = require("../db");
const routes = express.Router();
const usersController = require("../controllers/users.controller");
const usersValidate = require("../validates/user.validate");

// middleware
<<<<<<< HEAD
=======
// const authMiddleware = require("../middleware/auth.middleware");
>>>>>>> a771af1718a719e8b61f68a9b392e88abb258817

routes.get("/", usersController.index);
routes.get("/search", usersController.search);
routes.get("/create", usersController.viewCreate);
routes.get("/:id", usersController.viewDetails);
routes.post(
  "/create",
  upload.single("avatar"),
  usersValidate.checkCreate,
  usersController.create
);

module.exports = routes;
