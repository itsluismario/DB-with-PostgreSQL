const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(255);
const email = Joi.string().email();

const createUserSchema = Joi.object({
  id: id.required(),
  name: name.required(),
  email: email.required()
});

const parcialUpdateUserSchema = Joi.object({
  id: id,
  name: name,
  email: email
});

const updateUserSchema = Joi.object({
  id: id.required(),
  name: name.required(),
  email: email.required()
});

const getUserSchema = Joi.object({
  id: id.required()
});

const deleteUserSchema = Joi.object({
  id: id.required()
});

module.exports = { createUserSchema, updateUserSchema, parcialUpdateUserSchema, getUserSchema, deleteUserSchema }
