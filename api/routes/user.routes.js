
var express = require('express');
//const { create } = require('../../../csis279-app-20201027/csis279-app/src/actions/actions');
var router = express.Router();

const users = require('../services/user.service');

//users
router.post('/signUp', users.create);
router.get('/users', users.getUsers);
router.post('/register', users.registerUser);
router.post('/deleteUser', users.deleteUser);
router.post('/updateUser',users.updateUser);
router.post('/create',users.create);
router.post('/logIn', users.logIn);
//medicines order
router.post('/addMedOrder', users.addMedOrder);
router.get('/orders', users.getOrders);
router.post('/deleteMedOrder', users.deleteMedOrder);
router.post('/updateMedOrder', users.updateMedOrder);
//lab tests
router.post('/addLabTest', users.addLabTest);
router.get('/getLabTest', users.getLabTest);
router.post('/deleteLabTest', users.deleteLabTest);
router.post('/updateLabTest', users.updateLabTest);
//healthcare product
router.post('/addHealthcareProduct', users.addHealthcareProduct);
router.get('/getHealthcareProduct', users.getHealthcareProduct);
router.post('/deleteHealthcareProduct', users.deleteHealthcareProduct);
router.post('/updateHealthcareProduct', users.updateHealthcareProduct);
// //custom reusable component
router.post('/loadInfo', users.loadInfo);

router.post('/addImage', users.addImage);
router.get('/getImage', users.getImage);

router.get('/getDogs', users.getDogs);
router.post('/adoptDog', users.adoptDog);

router.get('/getCats', users.getCats);
router.post('/adoptCat', users.adoptCat);

router.get('/getLostPets', users.getLostPets);
router.post('/reportPet', users.reportPet);

router.post('/feedback', users.feedback);

module.exports = router

