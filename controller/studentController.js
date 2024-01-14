const Student = require('../models/Student');
exports.returnAllStudents = (req, res) => {
  Student.find({}, (err, students) => {
    if (err) {
      return res.status(500).send('Something broke!');
    }
    res.send(students);
  });
};
