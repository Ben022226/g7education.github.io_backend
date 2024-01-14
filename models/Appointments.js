const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  studentId: String,
  tutorId: String,
  courseId: String,
  appointmentDate: String,
});

module.exports = mongoose.model('appointments', appointmentSchema);