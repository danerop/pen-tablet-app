const express = require('express');
const router = express.Router();
const { CreateOrder} = require('../controller/carritoController');

//get all departments
router.post('/submitOrder', CreateOrder);

module.exports = router;