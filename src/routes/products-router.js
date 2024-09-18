const express = require('express');
const ProductsController = require('../controllers/products-controller');

const router = express.Router();

router.get('/products', ProductsController.findAll);
router.get('/products/:id', ProductsController.findById);
router.post('/products', ProductsController.create);
router.put('/products/:id', ProductsController.update);
router.delete('/products/:id', ProductsController.delete);

module.exports = router;
