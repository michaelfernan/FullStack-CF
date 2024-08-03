'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkInsert('cnpjs', [
        {
          id: 1,
          cnpj: '00000000000001',
          companyType: '2',
          createdAt: new Date('2024-08-01 21:21:33'),
          updatedAt: new Date('2024-08-01 21:20:33')
        },
        {
          id: 2,
          cnpj: '00000000000002',
          companyType: '1',
          createdAt: new Date('2024-08-02 20:20:33'),
          updatedAt: new Date('2020-10-02 20:20:33')
        },
        {
          id: 3,
          cnpj: '00000000000003',
          companyType: '3',
          createdAt: new Date('2024-08-02 21:20:33'),
          updatedAt: new Date('2024-08-02 21:20:33')
        },
        {
          id: 4,
          cnpj: '00000000000004',
          companyType: '4',
          createdAt: new Date('2024-08-03 21:20:33'),
          updatedAt: new Date('2024-08-03 21:20:33')
        }
      ], {});
    } catch (error) {
      console.error('Erro ao inserir dados na tabela `cnpjs`:', error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cnpjs', null, {});
  }
};
