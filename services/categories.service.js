const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class CategoriesService {

  constructor() {}

  async create(data) {
    console.log(data);
    const IsCategory = await models.Category.findOne({
      where: {
        name: data.name
        }
    });
    if (IsCategory) {
      throw boom.conflict('Category already exists');
    }
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  async find() {
    const data = await models.Category.findAll();
    if(data.length === 0) {
      throw boom.notFound('There are no categories');
    }
    return data;
  }

  async findOne(id) {
    const category = await models.Category.findByPk( id,{
      include: ['product']
    });
    if (!category) {
      throw boom.notFound("Category not found.")
    }
    return category
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    if (!category) {
      throw boom.notFound('Category not found')
      }
    const response = await category.update(changes);
    return response;
  }

  async delete(id) {
    const category = await this.findOne(id);
    if (!category) {
      throw boom.notFound('Category not found')
    }
    await category.destroy();
    return { id };
  }
}

module.exports = CategoriesService;
