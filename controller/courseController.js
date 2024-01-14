const Course = require('../models/Course');

exports.returnAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.send(courses);
  } catch (err) {
    res.status(500).send('Something broke!');
  }
};

exports.returnCoursesByTutorId = async (req, res) => {
  try {
    const courses = await Course.find({ tutorId: req.params.tutorId });
    res.send(courses);
  } catch (err) {
    res.status(500).send('Something broke!');
  }
};
