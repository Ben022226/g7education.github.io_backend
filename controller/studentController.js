const Student = require('../models/Student');
exports.returnAllStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    res.send(students);
  } catch (err) {
    res.status(500).send('Something broke!');
  }
};
