const { Buyer } = require('../database/models');

exports.getAllBuyers = async () => {
  return await Buyer.findAll();
};

exports.createBuyer = async (buyerData) => {
  return await Buyer.create(buyerData);
};

exports.updateBuyer = async (id, buyerData) => {
  await Buyer.update(buyerData, { where: { id } });
  return await Buyer.findByPk(id);
};

exports.getBuyerById = async (id) => {
  return await Buyer.findByPk(id);
};

exports.deleteBuyer = async (id) => {
  return await Buyer.destroy({ where: { id } });
};
