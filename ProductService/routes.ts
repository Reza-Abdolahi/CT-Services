import { Router } from 'express';
import { createProduct, getProduct, deleteProduct, listProducts } from './ProductController';

const router = Router();

// Product Routes
router.post('/products', createProduct);
router.get('/products/:id', getProduct);
router.delete('/products/:id', deleteProduct);
router.get('/products', listProducts);

export default router;