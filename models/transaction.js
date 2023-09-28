'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.Product)
      Transaction.belongsTo(models.User)
    }
  }
  Transaction.init({
    quantity: DataTypes.INTEGER,
    subTotal: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaction',
  });

  Transaction.beforeCreate((instance) => {
    instance.quantity = +instance.quantity
    instance.subTotal = +instance.subTotal
  })
  return Transaction;
};