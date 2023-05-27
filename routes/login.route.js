const express = require("express")

const db = require('../db')
const routes = express.Router()

const loginController = require("../controllers/login.controller")

routes.get('/', loginController.login)

module.exports = routes