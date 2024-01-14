const Student = require('../models/Student');
exports.returnAllStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    res.send(students);
  } catch (err) {
    res.status(500).send('Something broke!');
  }
};
exports.returnStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.studentId);
    res.send(student);
  } catch (err) {
    res.status(500).send('Something broke!');
  }
};
