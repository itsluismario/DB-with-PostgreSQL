const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(255);
const email = Joi.string().email();
const password = Joi.string().min(8);
const role = Joi.string().min(5);

const createUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required(),
  role: role.required()
});

const parcialUpdateUserSchema = Joi.object({
  name: name,
  email: email,
  password: password,
  role:role
});

const updateUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required(),
  role: role.required()
});

const getUserSchema = Joi.object({
  id: id.required()
});

const deleteUserSchema = Joi.object({
  id: id.required()
});

module.exports = { createUserSchema, updateUserSchema, parcialUpdateUserSchema, getUserSchema, deleteUserSchema }
