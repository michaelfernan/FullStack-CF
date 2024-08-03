'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('offers', [
      {
        id: 1,
        tax: '0.10',
        tariff: '0.05',
        adValorem: '0.02',
        float: '0.01',
        iof: '0.003',
        expiresIn: new Date('2024-12-31'),
        paymentStatusSponsor: false,
        paymentStatusProvider: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        orderId: 1,  
        sponsorId: 1
      },
      {
        id: 2,
        tax: '0.15',
        tariff: '0.07',
        adValorem: '0.03',
        float: '0.02',
        iof: '0.004',
        expiresIn: new Date('2024-12-31'),
        paymentStatusSponsor: false,
        paymentStatusProvider: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        orderId: 2,  
        sponsorId: 2 
      }
     
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('offers', null, {});
  }
};
