const { Sponsor } = require('../database/models');

exports.getAllSponsors = async () => {
  try {
    return await Sponsor.findAll();
  } catch (error) {
    console.error('Erro ao buscar patrocinadores:', error);
    throw error;
  }
};

exports.createSponsor = async (sponsorData) => {
  try {
    return await Sponsor.create(sponsorData);
  } catch (error) {
    console.error('Erro ao criar patrocinador:', error);
    throw error;
  }
};

exports.updateSponsor = async (id, sponsorData) => {
  try {
    const [affectedRows] = await Sponsor.update(sponsorData, { where: { id } });
    if (affectedRows === 0) {
      throw new Error('Patrocinador não encontrado');
    }
    return await Sponsor.findByPk(id);
  } catch (error) {
    console.error('Erro ao atualizar patrocinador:', error);
    throw error;
  }
};

exports.deleteSponsor = async (id) => {
  try {
    const deletedRows = await Sponsor.destroy({ where: { id } });
    if (deletedRows === 0) {
      throw new Error('Patrocinador não encontrado');
    }
  } catch (error) {
    console.error('Erro ao deletar patrocinador:', error);
    throw error;
  }
};
