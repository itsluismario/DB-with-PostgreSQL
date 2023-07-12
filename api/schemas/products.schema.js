const Joi = require('joi');

const id = Joi.number().integer();
const productName = Joi.string().min(3).max(15);
const stockNumber = Joi.number().integer();
const category = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();

const createProductSchema = Joi.object({
  productName: productName.required(),
  price: price.required(),
  stockNumber: stockNumber.required(),
  category: category.required(),
  image: image.required()
});

const parcialUpdateProductSchema = Joi.object({
  productName: productName,
  price: price,
  stockNumber: stockNumber,
  category: category,
  image: image
});

const updateProductSchema = Joi.object({
  productName: productName.required(),
  price: price.required(),
  stockNumber: stockNumber.required(),
  category: category.required(),
  image: image.required()
});

const getProductSchema = Joi.object({
  id: id.required()
});

const deleteProductSchema = Joi.object({
  id: id.required()
});

module.exports = { createProductSchema, updateProductSchema, parcialUpdateProductSchema, getProductSchema, deleteProductSchema }
