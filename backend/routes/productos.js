const express = require('express');
const router = express.Router();
const { 
    GetProducts,
    GetProductAttributes
 } = require('../controller/productosController.js');

//get all Product
router.get('/getProducts', GetProducts);

// Get product related attributes
router.get('/getProductAttributes', GetProductAttributes)


module.exports = router;