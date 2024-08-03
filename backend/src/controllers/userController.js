const { User } = require('../database/models');
const userService = require('../services/userService');

exports.getAllUsers = async (req, res) => {

  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados' });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar dados' });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar dados' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await userService.deleteUser(req.params.id);
    res.status(204).json({MESSAGE: "DELETADO COM SUCESSO"});
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar dados' });
  }
};
