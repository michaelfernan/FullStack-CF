const { Order, Buyer, Provider, Cnpj, User } = require('../database/models');

const ordersService = {
  getAllOrders: async () => {
    try {
      const ordersList = await Order.findAll({
        include: [
          { model: Buyer, as: 'buyer', attributes: ['name'] },
          { model: Provider, as: 'provider', attributes: ['name'] },
          { model: Cnpj, as: 'cnpj', attributes: ['cnpj'] },
          { model: User, as: 'user', attributes: ['name'] },
        ],
      });
      return ordersList;
    } catch (error) {
      console.error('Erro ao buscar todas as ordens:', error);
      throw new Error('Erro ao buscar todas as ordens');
    }
  },

  getOrderById: async (id) => {
    try {
      const order = await Order.findByPk(id, {
        include: [
          { model: Buyer, as: 'buyer', attributes: ['name'] },
          { model: Provider, as: 'provider', attributes: ['name'] },
          { model: Cnpj, as: 'cnpj', attributes: ['cnpj'] },
          { model: User, as: 'user', attributes: ['name'] },
        ],
      });
      return order;
    } catch (error) {
      console.error(`Erro ao buscar a ordem com ID ${id}:`, error);
      throw new Error('Erro ao buscar a ordem');
    }
  },

  createOrder: async (orderData) => {
    try {
      return await Order.create(orderData);
    } catch (error) {
      console.error('Erro ao criar a ordem:', error);
      throw new Error('Erro ao criar a ordem');
    }
  },

  updateOrder: async (id, orderData) => {
    try {
      return await Order.update(orderData, { where: { id } });
    } catch (error) {
      console.error(`Erro ao atualizar a ordem com ID ${id}:`, error);
      throw new Error('Erro ao atualizar a ordem');
    }
  },

  deleteOrder: async (id) => {
    try {
      return await Order.destroy({ where: { id } });
    } catch (error) {
      console.error(`Erro ao deletar a ordem com ID ${id}:`, error);
      throw new Error('Erro ao deletar a ordem');
    }
  },
};

module.exports = ordersService;
