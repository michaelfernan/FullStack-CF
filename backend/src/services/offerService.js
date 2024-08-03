const { Offer } = require('../database/models');

exports.getAllOffers = async () => {
  return await Offer.findAll();
};

exports.createOffer = async (offerData) => {
  try {
    return await Offer.create(offerData);
  } catch (error) {
    console.error('Erro ao criar offer:', error);
    throw error;
  }
};

exports.updateOffer = async (id, offerData) => {
  try {
    await Offer.update(offerData, { where: { id } });
    return await Offer.findByPk(id);
  } catch (error) {
    console.error('Erro ao atualizar offer:', error);
    throw error;
  }
};

exports.deleteOffer = async (id) => {
  try {
    return await Offer.destroy({ where: { id } });
  } catch (error) {
    console.error('Erro ao deletar offer:', error);
    throw error;
  }
};
