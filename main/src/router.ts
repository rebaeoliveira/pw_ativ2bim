import path from 'node:path';
import { Router } from 'express';
import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
// import multer from multer;

export const router = Router();

//List categories
router.get('/categories', listCategories);

//Create category
router.post('/categories', createCategory);

//List products
router.get('/products', (req, res) => {
	res.send('OK');
});

//Create products
router.post('/products', (req, res) => {
	res.send('OK');
});

//Get products by category
router.get('/categories/:categoryId/products', (req, res) => {
	res.send('OK');
});

//List orders
router.get('/orders', (req, res) => {
	res.send('OK');
});

//Create orders
router.post('/orders', (req, res) => {
	res.send('OK');
});

//Change orders status/ patch e nao put por ser uma alteração parcial
router.patch('/orders/:orderId', (req, res) => {
	res.send('OK');
});

//Delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
	res.send('OK');
});
