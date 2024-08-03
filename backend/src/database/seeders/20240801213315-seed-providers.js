'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('providers', [
      {
        id: 1,
        name: 'CEDENTE 002',
        tradingName: 'CEDENTE 002 LTDA',
        cashforceTax: null,
        responsibleName: null,
        responsibleEmail: null,
        responsiblePosition: null,
        responsiblePhone: null,
        responsibleMobile: null,
        website: null,
        postalCode: null,
        address: null,
        number: null,
        complement: null,
        neighborhood: null,
        city: null,
        state: null,
        bank: null,
        bankAgency: null,
        account: null,
        documents: null,
        phoneNumber: null,
        situation: null,
        situationDate: null,
        createdAt: new Date('2024-08-03 21:22:21'),
        updatedAt: new Date('2024-08-03 21:22:22'),
        cnpjId: 2,
        email: 'TEST@TEST02.com.br',
      },
      {
        id: 2,
        name: 'CEDENTE 003',
        tradingName: 'CEDENTE 003 LTDA',
        cashforceTax: null,
        responsibleName: null,
        responsibleEmail: null,
        responsiblePosition: null,
        responsiblePhone: null,
        responsibleMobile: null,
        website: null,
        postalCode: null,
        address: null,
        number: null,
        complement: null,
        neighborhood: null,
        city: null,
        state: null,
        bank: null,
        bankAgency: null,
        account: null,
        documents: null,
        phoneNumber: null,
        situation: null,
        situationDate: null,
        createdAt: new Date('2020-10-29 21:22:21'),
        updatedAt: new Date('2020-10-29 21:22:22'),
        cnpjId: 2,
        email:'TEST@TEST03.com.br',
      }
     
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('providers', null, {});
  }
};
