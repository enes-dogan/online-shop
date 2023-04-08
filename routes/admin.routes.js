const express = require('express');

const adminController = require('../controllers/admin.controller');

const router = express.Router();

router.get('/products', adminController.getProducts);

router.get('/products/new', adminController.getNewProduct);

router.get('/orders', function (req, res) {
  res.redirect('/products');
});

module.exports = router;
