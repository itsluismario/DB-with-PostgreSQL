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

  async find() {
    const data = await models.Product.findAll({
      include: ['category']
    });
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
