const Joi = require('joi');
const { createUserSchema, updateUserSchema } = require('./users.schema');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(255);
const lastName = Joi.string();
const phone = Joi.string();

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  user: createUserSchema
});

const parcialUpdateCustomerSchema = Joi.object({
  name,
  lastName,
  phone,
  updateUserSchema
});

const updateCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  user: updateUserSchema.required()
});

const getCustomerSchema = Joi.object({
  id: id.required()
});

const deleteCustomerSchema = Joi.object({
  id: id.required()
});

module.exports = { createCustomerSchema, updateCustomerSchema, parcialUpdateCustomerSchema, getCustomerSchema, deleteCustomerSchema }
