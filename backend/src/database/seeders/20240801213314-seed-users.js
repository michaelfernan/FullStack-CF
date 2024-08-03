'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'ALLAN SOUZA',
        email: 'allan@cashforce.com.br',
        phoneNumber: null,
        mobile: null,
        departament: null,
        verificationCode: '',
        emailChecked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        cashforceAdm: true,
      },
      {
        id: 2,
        name: 'Test',
        email: 'Tes@test.com.br',
        phoneNumber: null,
        mobile: null,
        departament: null,
        verificationCode: '',
        emailChecked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        cashforceAdm: true,
      },
      {
        id: 3,
        name: 'Test T2',
        email: 'Tes2@test2.com.br',
        phoneNumber: null,
        mobile: null,
        departament: null,
        verificationCode: '',
        emailChecked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        cashforceAdm: true,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
