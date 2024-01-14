const router = require('express').Router();
const appointmentController = require('../controller/appointmentController');

router.get('/all', appointmentController.returnAllAppointments);
router.get(
  '/student/:studentId',
  appointmentController.returnAppointmentByStudentId
);
router.get('/tutor/:tutorId', appointmentController.returnAppointmentByTutorId);

router.get('/:appointmentId', appointmentController.returnAppointmentById);
module.exports = router;
