# FullStack CF

### Este projeto é um desafio de teste técnico FullStack que utiliza **Node.js** para o backend, **Vue.js** para o frontend e **MySQL** para o banco de dados. O objetivo do projeto é demonstrar habilidades no desenvolvimento de aplicações completas, utilizando uma abordagem moderna e eficiente. O gerenciamento dos serviços é feito com **Docker** para garantir uma configuração e gerenciamento consistentes e reproduzíveis.

## 🚀 Instruções para Rodar o Projeto

### 1. Clonar o Repositório

### Clone o repositório usando o Git:

### git clone https://github.com/michaelfernan/FullStack-CF.git
### cd FullStack-CF

### 2. Instalar as Dependências
### Certifique-se de ter o Node.js e o Docker instalados em sua máquina. Instale as dependências do backend e do frontend:


# Instalar dependências do backend
### cd backend
### npm install

# Instalar dependências do frontend
### cd ../frontend
### npm install
### 3. Subir os Serviços com Docker
### Depois de instalar as dependências, você pode subir os serviços usando Docker Compose. Isso criará e iniciará os containers necessários para o projeto:


# Navegue para o diretório raiz do projeto
### cd ..

# Suba os containers com Docker Compose
### docker-compose up --build
### 4. Verificar o Funcionamento
### O backend estará disponível em http://localhost:3000.
### O frontend estará disponível em http://localhost:8080.

### 5. Rodar Migrações e Seeders
### Se precisar rodar as migrações e seeders no banco de dados, você pode fazer isso com os seguintes comandos:


# Acesse o container do backend
### docker-compose exec backend sh

# Rodar migrações
### npm run migrate

# Rodar seeders
### npm run seed
### 6. Parar os Containers
### Para parar os containers, você pode usar:


### docker-compose down
### 📜 Configuração do Docker
### Os serviços são configurados no arquivo docker-compose.yml. Aqui está um resumo das configurações:

### db: Serviço do MySQL 8.0, com um banco de dados chamado cashforce_v3.
### backend: Serviço Node.js, que depende do serviço db.
### frontend: Serviço Vue.js, que depende do serviço backend.
### 🔧 Configuração Adicional
### Se você precisar ajustar a configuração do banco de dados, modifique o arquivo backend/config/config.json conforme necessário. Certifique-se de que as variáveis de ambiente no Docker e o arquivo de configuração estão sincronizados.

### Para mais informações, consulte a documentação específica de cada parte do projeto ou entre em contato com o desenvolvedor.

### 📄 Notas Adicionais
### Substitua git@github.com:michaelfernan/FullStack-CF.git pelo URL real do seu repositório.
### Verifique se o nome dos serviços, portas e caminhos estão corretos de acordo com a sua configuração. Ajuste conforme necessário.