
# FullStack CF 🚀

Este projeto é um desafio técnico FullStack que utiliza **Node.js** para o backend, **Vue.js** para o frontend e **MySQL** para o banco de dados. O objetivo é demonstrar habilidades no desenvolvimento de aplicações completas, utilizando uma abordagem moderna e eficiente. O gerenciamento dos serviços é feito com **Docker** para garantir uma configuração e gerenciamento consistentes e reproduzíveis.

## 📋 Instruções para Rodar o Projeto

### 1. Clonar o Repositório

Clone o repositório usando o Git:

\`\`\`bash
git clone https://github.com/michaelfernan/FullStack-CF.git
cd FullStack-CF
\`\`\`

### 2. Instalar as Dependências

Certifique-se de ter o Node.js e o Docker instalados em sua máquina. Instale as dependências do backend e do frontend:

#### Backend

\`\`\`bash
cd backend
npm install
\`\`\`

#### Frontend

\`\`\`bash
cd ../frontend
npm install
\`\`\`

### 3. Subir os Serviços com Docker

Depois de instalar as dependências, você pode subir os serviços usando Docker Compose. Isso criará e iniciará os containers necessários para o projeto:

#### Navegue para o Diretório Raiz do Projeto

\`\`\`bash
cd ..
\`\`\`

#### Suba os Containers com Docker Compose

\`\`\`bash
docker-compose up --build
\`\`\`

### 4. Verificar o Funcionamento

- O backend estará disponível em [http://localhost:3000](http://localhost:3000).
- O frontend estará disponível em [http://localhost:8080](http://localhost:8080).

### 5. Rodar Migrações e Seeders

Se precisar rodar as migrações e seeders no banco de dados, você pode fazer isso com os seguintes comandos:

#### Acesse o Container do Backend

\`\`\`bash
docker-compose exec backend sh
\`\`\`

#### Rodar Migrações

\`\`\`bash
npm run migrate
\`\`\`

#### Rodar Seeders

\`\`\`bash
npm run seed
\`\`\`

### 6. Parar os Containers

Para parar os containers, você pode usar:

\`\`\`bash
docker-compose down
\`\`\`

## 🛠️ Configuração do Docker

Os serviços são configurados no arquivo \`docker-compose.yml\`. Aqui está um resumo das configurações:

- **db**: Serviço do MySQL.
- **backend**: Serviço Node.js, que depende do serviço \`db\`.
- **frontend**: Serviço Vue.js, que depende do serviço \`backend\`.

## 🔧 Configuração Adicional

Se precisar ajustar a configuração do banco de dados, modifique o arquivo \`backend/config/config.json\` conforme necessário. Certifique-se de que as variáveis de ambiente no Docker e o arquivo de configuração estão sincronizados.

Para mais informações, consulte a documentação específica de cada parte do projeto ou entre em contato com o desenvolvedor.

---

## 🎯 Desafio Técnico

**Teste**: Desenvolvedor FullStack Jr.

O teste consiste em criar uma API em Node utilizando preferencialmente Express e Sequelize, conectada ao banco de dados que será disponibilizado (clique [aqui](#) para acessar o SQL do banco de dados).

Após a criação dessa API, você terá que construir uma tela desenhada no Figma (clique [aqui](#) para acessar o Figma), preferencialmente em Vue.js, consultando essa API criada por você e exibindo os dados retornados.

### 🔍 Explicação do Banco de Dados

O banco de dados possui alguns relacionamentos:

- Na tabela de \`orders\`, os campos \`cnpjId\`, \`userId\`, \`buyerId\`, e \`providerId\` têm relacionamento com as tabelas \`cnpjs\`, \`users\`, \`buyers\`, e \`providers\`, respectivamente.
- \`buyers\` = sacados; \`providers\` = cedentes.

O status exibido no frontend é o status do \`buyer\` (\`orderStatusBuyer\`), seguindo a ordem dos status de 0 a 8:

\`\`\`json
[
  'Pendente de confirmação',
  'Pedido confirmado',
  'Não reconhece o pedido',
  'Mercadoria não recebida',
  'Recebida com avaria',
  'Devolvida',
  'Recebida com devolução parcial',
  'Recebida e confirmada',
  'Pagamento Autorizado'
]
\`\`\`
