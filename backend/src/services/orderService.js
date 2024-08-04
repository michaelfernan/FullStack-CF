const { Order, Buyer, Provider, Cnpj, User } = require('../database/models');

const statusMapping = [
  'Pendente de confirmação',
  'Pedido confirmado',
  'Não reconhece o pedido',
  'Mercadoria não recebida',
  'Recebida com avaria',
  'Devolvida',
  'Recebida com devolução parcial',
  'Recebida e confirmada',
  'Pagamento Autorizado'
];

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

      const ordersWithStatusText = ordersList.map(order => ({
        ...order.toJSON(),
        orderStatusText: statusMapping[order.orderStatusBuyer]
      }));

      return ordersWithStatusText;
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

      if (order) {
        const orderWithStatusText = {
          ...order.toJSON(),
          orderStatusText: statusMapping[order.orderStatusBuyer]
        };
        return orderWithStatusText;
      } else {
        return null;
      }
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
