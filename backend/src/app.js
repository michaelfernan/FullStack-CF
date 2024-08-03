const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes/index'); 
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3399;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });


app.use('', routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
