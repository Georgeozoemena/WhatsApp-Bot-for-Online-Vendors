const express = require('express');
const router = express.Router();
const { addNewProduct } = require('../controllers/productController')

router.post('/products', addNewProduct);

module.exports = router;