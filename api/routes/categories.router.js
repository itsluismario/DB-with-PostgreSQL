const express = require('express');
const CategoriesService = require('../services/categories.service')
const validatorHandler = require('../middlewares/validator.handler');
const { createCategorySchema, updateCategorySchema, parcialUpdateCategorySchema,
getCategorySchema, getProductByCategorySchema, deleteCategorySchema } = require('../schemas/categories.schema');

// -- Service
const service = new CategoriesService();

// -- Router
const router = express.Router();

router.get('/', async (req, res) => {
  const categories = await service.find();
  res.json(categories);
});

router.get('/:categoryId/products/:productId',
  validatorHandler(getProductByCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { categoryId, productId } = req.params;
      const product = await service.findOne( categoryId, productId);
      res.json(product);
    } catch (error) {
      next(error);
    }
});

router.post('/',
  validatorHandler(createCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await service.create(body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
});

router.patch('/:categoryId',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(parcialUpdateCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const { categoryId } = req.params;
      const body = req.body;
      const category = await service.update(categoryId, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
});

router.put('/:categoryId',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const { categoryId } = req.params;
      const body = req.body;
      const category = await service.update(categoryId, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
});

router.delete('/:categoryId',
  validatorHandler(deleteCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { categoryId } = req.params;
      const response = await service.delete(categoryId);
      res.json(response);
    } catch (error) {
      next(error);
    }
});

module.exports = router;

