const { Model, DataTypes, Sequelize } = require('sequelize');
const { CATEGORY_TABLE } = require('./category.model');
/**
 * @description description of each field in the table
 * @typedef {Object} field definition
 * @property {boolean} allowNull - false=NOT NULL
 * @property {boolean} autoIncrement - each insert, increase the counter
 * @property {boolean} primaryKey - define is primary key
 * @property {boolean} type - expresion to match SQL type
 * @property {boolean} unique - difne as unique the field
 * @property {boolean} field - rename the field
 */

const PRODUCT_TABLE = 'products';

const ProductSchema =  {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  productName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'product_name',
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  stockNumber: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: 'stock_number',
  },
  image: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  categoryId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'categoy_id',
    references: {
      model: CATEGORY_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
};

// You can do queries with Extend Model
class Product extends Model {
  // Dont have to declare the obj to have acces to the objects
  static associate(models) {
    // associate
    this.belongsTo(models.Category, {
      as: 'category',
      foreignKey: 'id'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false
    }
  }
}

module.exports = { PRODUCT_TABLE, ProductSchema, Product }
