const Tutor = require('../models/Tutor');
exports.returnAllTutors = async (req, res) => {
  try {
    const tutors = await Tutor.find({});
    res.send(tutors);
  } catch (err) {
    res.status(500).send('Something broke!');
  }
};
