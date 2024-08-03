const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Buyer extends Model {}

  Buyer.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tradingName: DataTypes.STRING,
    cashforceTax: DataTypes.STRING,
    responsibleName: DataTypes.STRING,
    responsibleEmail: DataTypes.STRING,
    responsiblePosition: DataTypes.STRING,
    responsiblePhone: DataTypes.STRING,
    responsibleMobile: DataTypes.STRING,
    website: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    address: DataTypes.STRING,
    number: DataTypes.STRING,
    complement: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    situation: DataTypes.STRING,
    situationDate: DataTypes.STRING,
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
    confirm: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Buyer',
    tableName: 'buyers',
    timestamps: false
  });
  Buyer.associate = (models) => {
    Buyer.hasMany(models.Order, { as: 'orders', foreignKey: 'buyerId' });
  };
  return Buyer;
};
