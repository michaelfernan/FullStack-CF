const { CNPJ } = require('../database/models');

const getAllCNPJs = async () => {
  try {
    return await CNPJ.findAll();
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    throw new Error('Erro ao buscar dados');
  }
};

const createCNPJ = async (cnpjData) => {
  try {
    return await CNPJ.create(cnpjData);
  } catch (error) {
    console.error('Erro ao criar dados:', error);
    throw new Error('Erro ao criar dados');
  }
};

const updateCNPJ = async (id, cnpjData) => {
  try {
    return await CNPJ.update(cnpjData, { where: { id } });
  } catch (error) {
    console.error('Erro ao atualizar dados:', error);
    throw new Error('Erro ao atualizar dados');
  }
};

const deleteCNPJ = async (id) => {
  try {
    return await CNPJ.destroy({ where: { id } });
  } catch (error) {
    console.error('Erro ao deletar dados:', error);
    throw new Error('Erro ao deletar dados');
  }
};

module.exports = {
  getAllCNPJs,
  createCNPJ,
  updateCNPJ,
  deleteCNPJ
};
