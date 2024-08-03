const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class OrderPortion extends Model {}
  
  OrderPortion.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nDup: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dVenc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vDup: {
      type: DataTypes.STRING,
      allowNull: false
    },
    availableToMarket: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    orderId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'orders',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'OrderPortion',
    tableName: 'orderportions',
    timestamps: false
  });

  return OrderPortion;
};
