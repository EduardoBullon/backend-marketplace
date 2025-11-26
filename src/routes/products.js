const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const { authenticate, authorize } = require('../middleware/auth.middleware');

// Public routes
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);

// Admin only routes
router.post('/', authenticate, authorize('ADMIN'), productController.createProduct);
router.put('/:id', authenticate, authorize('ADMIN'), productController.updateProduct);
router.delete('/:id', authenticate, authorize('ADMIN'), productController.deleteProduct);

module.exports = router;
