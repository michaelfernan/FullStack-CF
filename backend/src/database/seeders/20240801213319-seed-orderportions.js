'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('orderportions', [
      {
        id: 1,
        nDup: '001',
        dVenc: '2020-11-30',
        vDup: '1000.00',
        availableToMarket: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        orderId: 1  
      },
      {
        id: 2,
        nDup: '002',
        dVenc: '2020-12-30',
        vDup: '2000.00',
        availableToMarket: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        orderId: 2  
      },
      {
        id: 3,
        nDup: '003',
        dVenc: '2021-01-30',
        vDup: '3000.00',
        availableToMarket: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        orderId: 3 
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('orderportions', null, {});
  }
};
