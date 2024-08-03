const providerService = require('../services/providerService');

exports.getAllProviders = async (req, res) => {
  try {
    const providers = await providerService.getAllProviders();
    res.json(providers);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados' });
  }
};

exports.getProviderById = async (req, res) => {
  try {
      console.log(req.params.id)
    const provider = await providerService.getProviderById(req.params.id);
    if (!provider) {
      return res.status(404).json({ error: 'Provedor não encontrado' });
    }
    res.json(provider);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados' });
  }
};

exports.createProvider = async (req, res) => {
  try {
    const provider = await providerService.createProvider(req.body);
    res.status(201).json(provider);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar dados' });
  }
};

exports.updateProvider = async (req, res) => {
  try {
    const provider = await providerService.updateProvider(req.params.id, req.body);
    res.json(provider);
  } catch (error) {
    if (error.message === 'Provedor não encontrado') {
      res.status(404).json({ error: 'Provedor não encontrado' });
    } else {
      res.status(500).json({ error: 'Erro ao atualizar dados' });
    }
  }
};

exports.deleteProvider = async (req, res) => {
  try {
    await providerService.deleteProvider(req.params.id);
    res.status(204).json();
  } catch (error) {
    if (error.message === 'Provedor não encontrado') {
      res.status(404).json({ error: 'Provedor não encontrado' });
    } else {
      res.status(500).json({ error: 'Erro ao deletar dados' });
    }
  }
};
