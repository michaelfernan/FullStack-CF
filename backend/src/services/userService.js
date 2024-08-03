const { User } = require('../database/models');

exports.getAllUsers = async () => {
  return await User.findAll();
};

exports.createUser = async (userData) => {
  return await User.create(userData);
};

exports.updateUser = async (id, userData) => {
  return await User.update(userData, { where: { id } });
};

exports.deleteUser = async (id) => {
  return await User.destroy({ where: { id } });
};