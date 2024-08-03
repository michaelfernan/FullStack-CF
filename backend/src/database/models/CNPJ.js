const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Cnpj extends Model {}

  Cnpj.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: false
    },
    companyType: {
      type: DataTypes.STRING,
      allowNull: false
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
    }
  }, {
    sequelize,
    modelName: 'Cnpj',
    tableName: 'cnpjs',
    timestamps: true
  });

  Cnpj.associate = (models) => {
    Cnpj.hasMany(models.Order, { as: 'orders', foreignKey: 'cnpjId' });
  };

  return Cnpj;
};
