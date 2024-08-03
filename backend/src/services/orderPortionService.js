const { OrderPortion } = require('../database/models');

exports.getAllOrderPortions = async () => {
  return await OrderPortion.findAll();
};

exports.createOrderPortion = async (orderPortionData) => {
  return await OrderPortion.create(orderPortionData);
};

exports.updateOrderPortion = async (id, orderPortionData) => {
  return await OrderPortion.update(orderPortionData, { where: { id } });
};

exports.deleteOrderPortion = async (id) => {
  return await OrderPortion.destroy({ where: { id } });
};