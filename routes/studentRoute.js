const router = require('express').Router();
const studentController = require('../controller/studentController');

router.get('/all', studentController.returnAllStudents);
router.get('/:studentId', studentController.returnStudentById);

module.exports = router;
