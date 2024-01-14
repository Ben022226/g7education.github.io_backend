const Course = require('../models/Course');

exports.returnAllCourses = (req, res) => {
  Course.find({}, (err, courses) => {
    if (err) {
      return res.status(500).send('Something broke!');
    }
    res.send(courses);
  });
};

exports.returnCoursesByTutorId = (req, res) => {
  Course.find({ tutorId: req.params.tutorId }, (err, courses) => {
    if (err) {
      return res.status(500).send('Something broke!');
    }
    res.send(courses);
  });
};
