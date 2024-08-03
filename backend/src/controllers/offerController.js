const offerService = require('../services/offerService');

exports.getAllOffers = async (req, res) => {
  try {
    const offers = await offerService.getAllOffers();
    res.json(offers);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    res.status(500).json({ error: 'Erro ao buscar dados' });
  }
};

exports.createOffer = async (req, res) => {
  try {
    const offer = await offerService.createOffer(req.body);
    res.status(201).json(offer);
  } catch (error) {
    console.error('Erro ao criar dados:', error);
    res.status(500).json({ error: 'Erro ao criar dados' });
  }
};

exports.updateOffer = async (req, res) => {
  try {
    const offer = await offerService.updateOffer(req.params.id, req.body);
    res.json(offer);
  } catch (error) {
    console.error('Erro ao atualizar dados:', error);
    res.status(500).json({ error: 'Erro ao atualizar dados' });
  }
};

exports.deleteOffer = async (req, res) => {
  try {
    await offerService.deleteOffer(req.params.id);
    res.status(204).json();
  } catch (error) {
    console.error('Erro ao deletar dados:', error);
    res.status(500).json({ error: 'Erro ao deletar dados' });
  }
};
