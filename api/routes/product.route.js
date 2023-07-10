const express = require("express");

const productController = require("../controller/product.controller");
const routes = express.Router();

routes.get("/", productController.index);
routes.post("/", productController.create);

module.exports = routes;
