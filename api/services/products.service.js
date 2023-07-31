const { Op } = require('sequelize');
const boom  = require('@hapi/boom');

const { models } = require('../../libs/sequelize');

class ProductsService {

  constructor() {}

  async create(data) {
    const IsProduct = await models.Product.findOne({
      where: {
        productName: data.productName
        }
    });
    if(IsProduct) {
      throw boom.conflict('Product already exists');
    }
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find(query) {
    const options = {
      include: ['category'],
      where: {}
    }
    const { limit, offset } = query;
    if ( limit && offset ) {
      options.limit = limit;
      options.offset = offset;
    }
    const { price } = query;
    if (price) {
      options.where.price = price;
    }
    const { price_min, price_max } = query;
    if (price_min && price_max) {
      options.where.price = {
        [Op.between]: [price_min, price_max],
      };
    }
    const data = await models.Product.findAll(options);
    if(data.length === 0) {
      throw boom.notFound('There are no products');
    }
    return data;
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    return product;
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    if (!product) {
      throw boom.notFound('Product not found')
      }
    const response = await product.update(changes);
    return response;
  }

  async delete(id) {
    const product = await this.findOne(id);
    if (!product) {
      throw boom.notFound('Product not found')
    }
    await product.destroy();
    return { id };
  }
}

module.exports = ProductsService;
