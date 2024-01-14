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

exports.returnCourseById = async (req, res) => {
  try {
    const course = await Course.find({ courseID: req.params.courseId });
    res.send(course);
  } catch (err) {
    res.status(500).send('Something broke!');
  }
};
exports.createCourse = async (req, res) => {
  try {
    // Find the latest course
    const latestCourse = await Course.findOne(
      {},
      {},
      { sort: { courseID: -1 } }
    );

    // Extract the numeric part of the course ID and increment it
    const currentNumber = parseInt(
      latestCourse.courseID.replace('COURSE', ''),
      10
    );
    const newNumber = currentNumber + 1;

    // Create the new course ID in the desired format
    const newCourseID = `COURSE${newNumber}`;

    // Assign the new course ID to the request body
    req.body.courseID = newCourseID;

    // Create the new course
    const course = await Course.create(req.body);

    res.send(course);
  } catch (err) {
    res.status(500).send('Something broke!');
  }
};
