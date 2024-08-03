const { Provider } = require('../database/models');

exports.getAllProviders = async () => {
  try {
    return await Provider.findAll();
  } catch (error) {
    console.error('Erro ao buscar provedores:', error);
    throw error;
  }
};

exports.getProviderById = async (id) => {
  try {
    return await Provider.findByPk(id);
  } catch (error) {
    console.error('Erro ao buscar provedor por ID:', error);
    throw error;
  }
};

exports.createProvider = async (providerData) => {
  try {
    return await Provider.create(providerData);
  } catch (error) {
    console.error('Erro ao criar provedor:', error);
    throw error;
  }
};
exports.updateProvider = async (id, providerData) => {
  try {
    const [affectedRows] = await Provider.update(providerData, { where: { id } });
    if (affectedRows === 0) {
      throw new Error('Provedor não encontrado');
    }
    return await Provider.findByPk(id);
  } catch (error) {
    console.error('Erro ao atualizar provedor:', error);
    throw error;
  }
};

exports.deleteProvider = async (id) => {
  try {
    const deletedRows = await Provider.destroy({ where: { id } });
    if (deletedRows === 0) {
      throw new Error('Provedor não encontrado');
    }
  } catch (error) {
    console.error('Erro ao deletar provedor:', error);
    throw error;
  }
};
