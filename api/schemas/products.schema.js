const Joi = require('joi');

const id = Joi.number().integer();
const productName = Joi.string().min(3).max(15);
const stockNumber = Joi.number().integer();
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();
const description = Joi.string().min(10);
const categoryId = Joi.number().integer();

const createProductSchema = Joi.object({
  productName: productName.required(),
  price: price.required(),
  description: description.required(),
  stockNumber: stockNumber.required(),
  image: image.required(),
  categoryId: categoryId.required()
});

const parcialUpdateProductSchema = Joi.object({
  productName,
  price,
  description,
  stockNumber,
  image,
  categoryId
});

const updateProductSchema = Joi.object({
  productName: productName.required(),
  price: price.required(),
  description: description.required(),
  stockNumber: stockNumber.required(),
  image: image.required(),
  categoryId: categoryId.required()
});

const getProductSchema = Joi.object({
  id: id.required()
});

const deleteProductSchema = Joi.object({
  id: id.required()
});

module.exports = { createProductSchema, updateProductSchema, parcialUpdateProductSchema, getProductSchema, deleteProductSchema }
