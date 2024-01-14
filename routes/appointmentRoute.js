const router = require('express').Router();
const appointmentController = require('../controllers/appointmentController');

router.get('/all', appointmentController.returnAllAppointments);
router.get(
  '/student/:studentId',
  appointmentController.returnAppointmentByStudentId
);
router.get('/tutor/:tutorId', appointmentController.returnAppointmentByTutorId);

module.exports = router;
