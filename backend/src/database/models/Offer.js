const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Offer extends Model {}

  Offer.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    tax: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tariff: {
      type: DataTypes.STRING,
      allowNull: false
    },
    adValorem: {
      type: DataTypes.STRING,
      allowNull: false
    },
    float: {
      type: DataTypes.STRING,
      allowNull: false
    },
    iof: {
      type: DataTypes.STRING,
      allowNull: false
    },
    expiresIn: {
      type: DataTypes.DATE,
      allowNull: false
    },
    paymentStatusSponsor: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    paymentStatusProvider: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
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
      },
      allowNull: true
    },
    sponsorId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'sponsors',
        key: 'id'
      },
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Offer',
    tableName: 'offers',
    timestamps: false
  });

  return Offer;
};
