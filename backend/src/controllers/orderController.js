const ordersService = require('../services/orderService');

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await ordersService.getAllOrders();
    res.json(orders);
  } catch (error) {
    console.error('Erro ao buscar todas as ordens:', error);
    res.status(500).json({ error: 'Erro ao buscar dados' });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await ordersService.getOrderById(req.params.id);
    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ error: 'Ordem não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao buscar a ordem:', error);
    res.status(500).json({ error: 'Erro ao buscar dados' });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const order = await ordersService.createOrder(req.body);
    res.status(201).json(order);
  } catch (error) {
    console.error('Erro ao criar a ordem:', error);
    res.status(500).json({ error: 'Erro ao criar a ordem' });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const updatedOrder = await ordersService.updateOrder(req.params.id, req.body);
    if (updatedOrder[0] === 1) {
      res.json({ message: 'Ordem atualizada com sucesso' });
    } else {
      res.status(404).json({ error: 'Ordem não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao atualizar a ordem:', error);
    res.status(500).json({ error: 'Erro ao atualizar a ordem' });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const result = await ordersService.deleteOrder(req.params.id);
    if (result === 1) {
      res.json({ message: 'Ordem deletada com sucesso' });
    } else {
      res.status(404).json({ error: 'Ordem não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao deletar a ordem:', error);
    res.status(500).json({ error: 'Erro ao deletar a ordem' });
  }
};
