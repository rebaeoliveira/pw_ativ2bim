"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const listCategories_1 = require("./app/useCases/categories/listCategories");
const createCategory_1 = require("./app/useCases/categories/createCategory");
exports.router = (0, express_1.Router)();
//List categories
exports.router.get('/categories', listCategories_1.listCategories);
//Create category
exports.router.post('/categories', createCategory_1.createCategory);
//List products
exports.router.get('/products', (req, res) => {
    res.send('OK');
});
//Create products
exports.router.post('/products', (req, res) => {
    res.send('OK');
});
//Get products by category
exports.router.get('/categories/:categoryId/products', (req, res) => {
    res.send('OK');
});
//List orders
exports.router.get('/orders', (req, res) => {
    res.send('OK');
});
//Create orders
exports.router.post('/orders', (req, res) => {
    res.send('OK');
});
//Change orders status/ patch e nao put por ser uma alteração parcial
exports.router.patch('/orders/:orderId', (req, res) => {
    res.send('OK');
});
//Delete/cancel order
exports.router.delete('/orders/:orderId', (req, res) => {
    res.send('OK');
});
