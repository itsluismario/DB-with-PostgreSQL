const express = require('express');

const OrderService = require('../services/orders.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
	getOrderSchema,
	createOrderSchema,
  parcialUpdateOrderSchema,
  updateOrderSchema
} = require('../schemas/orders.schema');

const router = express.Router();
const service =new OrderService();

router.get(
	'/:id',
	validatorHandler(getOrderSchema, 'params'),
async (req, res, next) => {
try {
const { id } = req.params;
const order =await service.findOne(id);
			res.json(order);
		}catch (error) {
			next(error);
		}
	}
);

router.get('/',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = await service.find(id);
      res.json(order);
    } catch (error) {
      next(error);
    }
});


router.post(
	'/',
	validatorHandler(createOrderSchema, 'body'),
async (req, res, next) => {
try {
const body = req.body;
const newOrder =await service.create(body);
			res.status(201).json({ newOrder });
		}catch (error) {
			next(error);
		}
});

  router.patch('/:id',
  validatorHandler(getOrderSchema, 'params'),
  validatorHandler(parcialUpdateOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const order = await service.update(id, body);
      res.json(order);
    } catch (error) {
      next(error);
    }
});

router.put('/:id',
  validatorHandler(getOrderSchema, 'params'),
  validatorHandler(updateOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const order = await service.update(id, body);
      res.json(order);
    } catch (error) {
      next(error);
    }
});

router.delete('/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await service.delete(id);
      res.json(response);
    } catch (error) {
      next(error);
    }
});

module.exports = router;
