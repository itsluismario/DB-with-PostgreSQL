const Joi = require('joi');

const productId = Joi.string().uuid();
const categoryId = Joi.string().uuid();
const name = Joi.string().min(3).max(35);
const price = Joi.number().integer().min(10);

const productSchema = Joi.object({
  productId: productId.required(),
  name: name.required(),
  price: price.required()
});

const createCategorySchema = Joi.object({
  categoryId: categoryId.required(),
  name: name.required(),
  products: Joi.array().items(productSchema).required()
});

const parcialUpdateCategorySchema = Joi.object({
  categoryId: categoryId,
  name: name,
  products: Joi.array().items(productSchema)
});

const updateCategorySchema = Joi.object({
  categoryId: categoryId.required(),
  name: name.required(),
  products: Joi.array().items(productSchema).required()
});

const getCategorySchema = Joi.object({
  categoryId: categoryId.required()
});

const getProductByCategorySchema = Joi.object({
  productId: productId.required(),
  categoryId: productId.required(),
});

const deleteCategorySchema = Joi.object({
  categoryId: categoryId.required()
});

module.exports = { createCategorySchema, updateCategorySchema, parcialUpdateCategorySchema, getCategorySchema, getProductByCategorySchema,deleteCategorySchema }
