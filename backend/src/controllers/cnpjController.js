const cnpjService = require('../services/cnpjService');

exports.getAllCNPJs = async (req, res) => {
  try {
    const cnpjs = await cnpjService.getAllCNPJs();
    res.json(cnpjs);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados' });
  }
};

exports.createCNPJ = async (req, res) => {
  try {
    const cnpj = await cnpjService.createCNPJ(req.body);
    res.status(201).json(cnpj);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar dados' });
  }
};

exports.updateCNPJ = async (req, res) => {
  try {
    const cnpj = await cnpjService.updateCNPJ(req.params.id, req.body);
    res.json(cnpj);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar dados' });
  }
};

exports.deleteCNPJ = async (req, res) => {
  try {
    await cnpjService.deleteCNPJ(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar dados' });
  }
};
