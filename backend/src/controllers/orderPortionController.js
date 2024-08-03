const { OrderPortion } = require('../database/models');
const orderPortionService = require('../services/orderPortionService');

exports.getAllOrderPortions = async (req, res) => {
  try {
    const orderPortions = await orderPortionService.getAllOrderPortions();
    res.json(orderPortions);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados' });
  }
};

exports.createOrderPortion = async (req, res) => {
  try {
    const orderPortion = await orderPortionService.createOrderPortion(req.body);
    res.status(201).json(orderPortion);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar dados' });
  }
};

exports.updateOrderPortion = async (req, res) => {
  try {
    const orderPortion = await orderPortionService.updateOrderPortion(req.params.id, req.body);
    res.json(orderPortion);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar dados' });
  }
};

exports.deleteOrderPortion = async (req, res) => {
  try {
    await orderPortionService.deleteOrderPortion(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar dados' });
  }
};