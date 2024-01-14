const router = require('express').Router();
const studentController = require('../controllers/studentController');

router.get('/all', studentController.returnAllStudents);
router.get('/:studentId', studentController.returnStudentById);

module.exports = router;
