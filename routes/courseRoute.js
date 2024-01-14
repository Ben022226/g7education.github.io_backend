const router = require('express').Router;

const courseController = require('../controllers/courseController');

router.get('/all', courseController.returnAllCourses);
router.get('/tutor/:tutorId', courseController.returnCoursesByTutorId);

module.exports = router;
