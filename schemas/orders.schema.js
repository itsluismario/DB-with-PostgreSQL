const Joi = require('joi');

const id = Joi.number().integer();
const customerId = Joi.number().integer();
const orderId = Joi.number().integer();
const productId = Joi.number().integer();
const amount = Joi.number().min(1);

const getOrderSchema = Joi.object({
  id: id.required(),
});

const createOrderSchema = Joi.object({
  customerId: customerId.required(),
});

const addingItemSchema = Joi.object({
  orderId: orderId.required(),
  productId: productId.required(),
  amount: amount.required()
});

const parcialUpdateOrderSchema = Joi.object({
  customerId
});

const updateOrderSchema = Joi.object({
  customerId: customerId.required(),
});

module.exports = { getOrderSchema, createOrderSchema, parcialUpdateOrderSchema, updateOrderSchema, addingItemSchema };
