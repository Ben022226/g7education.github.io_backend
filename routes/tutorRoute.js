const router = require('express').Router();
const tutorController = require('../controllers/tutorController');

router.get('/all', tutorController.returnAllTutors);
router.get('/:tutorId', tutorController.returnTutorById);

module.exports = router;