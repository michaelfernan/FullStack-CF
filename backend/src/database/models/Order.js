const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Order extends Model {}

  Order.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    orderNfId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    orderNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    orderPath: DataTypes.STRING,
    orderFileName: DataTypes.STRING,
    orderOriginalName: DataTypes.STRING,
    emissionDate: DataTypes.STRING,
    pdfFile: DataTypes.STRING,
    emitedTo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nNf: DataTypes.STRING,
    CTE: DataTypes.STRING,
    value: DataTypes.STRING,
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
    cnpjId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Cnpj',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    buyerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Buyer',
        key: 'id'
      }
    },
    providerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Provider',
        key: 'id'
      }
    },
    orderStatusBuyer: DataTypes.STRING,
    orderStatusProvider: DataTypes.STRING,
    deliveryReceipt: DataTypes.STRING,
    cargoPackingList: DataTypes.STRING,
    deliveryCtrc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
    timestamps: false
  });

  Order.associate = (models) => {
    Order.belongsTo(models.Buyer, { as: 'buyer', foreignKey: 'buyerId' });
    Order.belongsTo(models.Provider, { as: 'provider', foreignKey: 'providerId' });
    Order.belongsTo(models.Cnpj, { as: 'cnpj', foreignKey: 'cnpjId' });
    Order.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
  };

  return Order;
};
