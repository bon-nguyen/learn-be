const express = require("express");

const routes = express.Router();
const productsController = require("../controllers/products.controller");

routes.get("/", productsController.index);

module.exports = routes;
