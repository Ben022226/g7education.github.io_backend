const router = require('express').Router();
const courseController = require('../controller/courseController');

router.get('/all', courseController.returnAllCourses);
router.get('/tutor/:tutorId', courseController.returnCoursesByTutorId);
router.get('/:courseId', courseController.returnCourseById);
router.post('/add', courseController.createCourse);
module.exports = router;
