const buyerService = require('../services/buyerService');

exports.getAllBuyers = async (req, res) => {
  try {
    const buyers = await buyerService.getAllBuyers();
    res.json(buyers);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados' });
  }
};

exports.createBuyer = async (req, res) => {
  try {
    const buyer = await buyerService.createBuyer(req.body);
    res.status(201).json(buyer);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar dados' });
  }
};

exports.updateBuyer = async (req, res) => {
  try {
    const updatedBuyer = await buyerService.updateBuyer(req.params.id, req.body);
    if (updatedBuyer) {
      res.json(updatedBuyer);
    } else {
      res.status(404).json({ error: 'Buyer not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar dados' });
  }
};

exports.deleteBuyer = async (req, res) => {
  try {
    const result = await buyerService.deleteBuyer(req.params.id);
    if (result === 1) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Buyer not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar dados' });
  }
};
