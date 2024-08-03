const express = require('express');
const router = express.Router();

const buyerController = require('../controllers/buyerController');
const cnpjController = require('../controllers/cnpjController');
const offerController = require('../controllers/offerController');
const orderPortionController = require('../controllers/orderPortionController');
const orderController = require('../controllers/orderController');
const providerController = require('../controllers/providerController');
const sponsorController = require('../controllers/sponsorController');
const userController = require('../controllers/userController');

// Buyers
router.get('/buyers', buyerController.getAllBuyers);
router.post('/buyers', buyerController.createBuyer);
router.put('/buyers/:id', buyerController.updateBuyer);
router.delete('/buyers/:id', buyerController.deleteBuyer);

// CNPJs
router.get('/cnpjs', cnpjController.getAllCNPJs);
router.post('/cnpjs', cnpjController.createCNPJ);
router.put('/cnpjs/:id', cnpjController.updateCNPJ);
router.delete('/cnpjs/:id', cnpjController.deleteCNPJ);

// Offers
router.get('/offers', offerController.getAllOffers);
router.post('/offers', offerController.createOffer);
router.put('/offers/:id', offerController.updateOffer);
router.delete('/offers/:id', offerController.deleteOffer);

// Order Portions
router.get('/orderportions', orderPortionController.getAllOrderPortions);
router.post('/orderportions', orderPortionController.createOrderPortion);
router.put('/orderportions/:id', orderPortionController.updateOrderPortion);
router.delete('/orderportions/:id', orderPortionController.deleteOrderPortion);

// Orders
router.get('/orders', orderController.getAllOrders);
router.post('/orders', orderController.createOrder);
router.put('/orders/:id', orderController.updateOrder);
router.delete('/orders/:id', orderController.deleteOrder);

// Providers
router.get('/providers', providerController.getAllProviders);
router.get('/providers/:id', providerController.getProviderById); 
router.post('/providers', providerController.createProvider);
router.put('/providers/:id', providerController.updateProvider);
router.delete('/providers/:id', providerController.deleteProvider);

// Sponsors
router.get('/sponsors', sponsorController.getAllSponsors);
router.post('/sponsors', sponsorController.createSponsor);
router.put('/sponsors/:id', sponsorController.updateSponsor);
router.delete('/sponsors/:id', sponsorController.deleteSponsor);

// Users
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
