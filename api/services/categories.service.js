const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

const { models } = require('../../libs/sequelize');

class CategoriesService {

  constructor() {
    this.categories = [];
    this.generate();
  }

  generate() {
    // Generate a random number of categories (between 3 and 5)
    const numCategories = faker.number.int({ min: 3, max: 5 });

    // Generate categories and products
    for (let i = 0; i < numCategories; i++) {
      const category = {
        categoryId: faker.string.uuid(),
        name: faker.commerce.department(),
        products: [],
      };

      // Generate a random number of products for each category (between 1 and 5)
      const numProducts = faker.number.int({ min: 1, max: 5 });

      // Generate products and add them to the category
      for (let j = 0; j < numProducts; j++) {
        const product = {
          productId: faker.string.uuid(),
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
        };
        category.products.push(product);
      }

      // Add the category to the list
      this.categories.push(category);
    }
  }

  async create(data) {
    const IsCategory = await models.Category.findOne({
      where: {
        category: data.category
        }
    });
    if (IsCategory) {
      throw boom.conflict('Category already exists');
    }
    const newCategory = await models.User.create(data);
    return newCategory;
  }

  async find() {
    const data = await models.Category.findAll();
    if(data.length === 0) {
      throw boom.notFound('There are no categories');
    }
    return data;
  }

  findOne(categoryId, productId) {
    // Find the category based on categoryId
    const category = this.categories.find(cat => cat.categoryId === categoryId);
    console.log(category);
    if (category) {
      // Find the product based on productId within the found category
      const product = category.products.find(prod => prod.productId === productId);

      if (product) {
        return product
      } else {
        throw boom.notFound("Product not found.")
      }
    } else {
      throw boom.notFound("Category not found.")
    }
  }

  update(id, changes) {
    const index = this.categories.findIndex(cat => cat.categoryId === id);
    if (index === -1) {
      throw boom.notFound('Category not found')
      }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...changes
    }
    return this.categories[index];
  }

  delete(id) {
    const index = this.categories.findIndex(item => item.categoryId === id);
    if (index === -1) {
      throw boom.notFound('Category not found')
    }
    this.categories.splice(index, 1)
    return { id };
  }
}

module.exports = CategoriesService;
