const express = require('express')

const cartController = require('../controllers/cart.controller')
const router = express.Router()

router.get('/add/:productId', cartController.addToCard)

module.exports = router