const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema({
  tutorId: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  age: Number,
  phoneNumber: String,
  profileImageUrl: String,
  email: String,
});

module.exports = mongoose.model('tutors', tutorSchema);
