const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
    unique: true,
  },
  studentName: String,
  age: Number,
  location: String,
  studentName: String,
  phoneNumber: String,
  profileImageUrl: String,
  email: String,
});

module.exports = mongoose.model('students', studentSchema);