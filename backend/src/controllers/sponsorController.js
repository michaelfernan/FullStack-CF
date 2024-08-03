const sponsorService = require('../services/sponsorService');

exports.getAllSponsors = async (req, res) => {
  try {
    const sponsors = await sponsorService.getAllSponsors();
    res.json(sponsors);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados' });
  }
};
exports.createSponsor = async (req, res) => {
  try {
    const sponsor = await sponsorService.createSponsor(req.body);
    res.status(201).json(sponsor);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar dados' });
  }
};

exports.updateSponsor = async (req, res) => {
  try {
    const sponsor = await sponsorService.updateSponsor(req.params.id, req.body);
    res.json(sponsor);
  } catch (error) {
    if (error.message === 'Patrocinador não encontrado') {
      res.status(404).json({ error: 'Patrocinador não encontrado' });
    } else {
      res.status(500).json({ error: 'Erro ao atualizar dados' });
    }
  }
};

exports.deleteSponsor = async (req, res) => {
  try {
    await sponsorService.deleteSponsor(req.params.id);
    res.status(204).json();
  } catch (error) {
    if (error.message === 'Patrocinador não encontrado') {
      res.status(404).json({ error: 'Patrocinador não encontrado' });
    } else {
      res.status(500).json({ error: 'Erro ao deletar dados' });
    }
  }
};
