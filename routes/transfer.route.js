const express = require("express");
const routes = express.Router();

const transferController = require("../controllers/transfer.controller");

routes.get("/create", transferController.create);
routes.post("/create", transferController.postCreate);

module.exports = routes;
