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
    const tutor = await Tutor.find({ tutorId: req.params.tutorId });
    res.send(tutor);
  } catch (err) {
    res.status(500).send('Something broke!');
  }
};
exports.updateTutorById = async (req, res) => {
  try {
    const tutor = await Tutor.findOneAndUpdate(
      { tutorId: req.params.tutorId },
      req.body,
      { new: true }
    );
    res.send(tutor);
  } catch (err) {
    res.status(500).send('Something broke!');
  }
};
