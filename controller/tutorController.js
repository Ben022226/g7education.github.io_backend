const Tutor = require('../models/Tutor');
exports.returnAllTutors = (req, res) => {
  Tutor.find({}, (err, tutors) => {
    if (err) {
      return res.status(500).send('Something broke!');
    }
    res.send(tutors);
  });
};
