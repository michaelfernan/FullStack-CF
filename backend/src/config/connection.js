require('dotenv').config();
const { Sequelize } = require('sequelize');
const config = require('./config.json');

const environment = process.env.NODE_ENV || 'development';
const { username, password, database, host, port, dialect } = config[environment];

const sequelize = new Sequelize(database, username, password, {
  host,
  port,
  dialect,
  logging: false,
});

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

module.exports = sequelize;
