const router = require('express').Router();
const tutorController = require('../controller/tutorController');

router.get('/all', tutorController.returnAllTutors);


module.exports = router;
