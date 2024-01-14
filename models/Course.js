const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseID: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  tutorId: String,
  startDate: String,
  endDate: String,
});

module.exports = mongoose.model('courses', courseSchema);
