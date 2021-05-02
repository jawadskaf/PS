
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

router.post('/addImage', users.addImage);
router.get('/getImage', users.getImage);

//Dog table
router.get('/getDogs', users.getDogs);
router.post('/adoptDog', users.adoptDog);

//cat table
router.get('/getCats', users.getCats);
router.post('/adoptCat', users.adoptCat);

//report lost pet table
router.get('/getLostPets', users.getLostPets);
router.post('/reportPet', users.reportPet);

//feedback table
router.post('/feedback', users.feedback);

module.exports = router

