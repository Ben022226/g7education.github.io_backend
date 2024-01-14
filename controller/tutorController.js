const Tutor = require('../models/Tutor');
exports.returnAllTutors = async (req, res) => {
  try {
    const tutors = await Tutor.find({});
    res.send(tutors);
  } catch (err) {
    res.status(500).send('Something broke!');
  }
};

exports.returnTutorById = async (req, res) => {
  try {
    const tutor = await Tutor.findById(req.params.tutorId);
    res.send(tutor);
  } catch (err) {
    res.status(500).send('Something broke!');
  }
};
