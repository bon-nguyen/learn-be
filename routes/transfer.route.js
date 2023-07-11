<<<<<<< HEAD
const express = require("express");
const routes = express.Router();

const transferController = require("../controllers/transfer.controller");

routes.get("/create", transferController.create);
routes.post("/create", transferController.postCreate);

module.exports = routes;
=======
const express = require("express")

const routes = express.Router()

const transferController = require('../controllers/transfer.controller')

routes.get('/', transferController.create)
routes.post('/create', transferController.postCreate)

module.exports = routes
>>>>>>> a771af1718a719e8b61f68a9b392e88abb258817
