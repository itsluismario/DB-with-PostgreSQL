const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(255);
const lastName = Joi.string();
const phone = Joi.string();
const userId = Joi.number().integer();

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  userId: userId.required()
});

const parcialUpdateCustomerSchema = Joi.object({
  name,
  lastName,
  phone,
  userId
});

const updateCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  userId: userId.required()
});

const getCustomerSchema = Joi.object({
  id: id.required()
});

const deleteCustomerSchema = Joi.object({
  id: id.required()
});

module.exports = { createCustomerSchema, updateCustomerSchema, parcialUpdateCustomerSchema, getCustomerSchema, deleteCustomerSchema }
