'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Store),
      Product.belongsTo(models.Category)
      Product.hasMany(models.Transaction)
    }
    
    get newCondition() {
      return this.condition === true ? 'Baru' : 'Bekas'
    }

  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    imageURL: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    condition: DataTypes.BOOLEAN,
    isLike: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER,
    StoreId: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};