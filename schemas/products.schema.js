const Joi = require('joi');

const id = Joi.number().integer();
const productName = Joi.string().min(3).max(15);
const stockNumber = Joi.number().integer();
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();
const description = Joi.string().min(10);
const categoryId = Joi.number().integer();
const limit = Joi.number().integer();
const offset = Joi.number().integer();
const price_max = Joi.number().integer();
const price_min = Joi.number().integer();

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

const queryProductSchema = Joi.object({
  limit,
  offset,
  price,
  price_min,
  price_max: price_max.when('price_min', {
    is: Joi.exist(),
    then: Joi.required()
  })
});

const deleteProductSchema = Joi.object({
  id: id.required()
});

module.exports = { queryProductSchema, createProductSchema, updateProductSchema, parcialUpdateProductSchema, getProductSchema, deleteProductSchema }
