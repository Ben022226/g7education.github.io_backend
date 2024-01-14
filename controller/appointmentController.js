const Appointments = require('../models/Appointments');

exports.returnAllAppointments = (req, res) => {
  Appointments.find({}, (err, appointments) => {
    if (err) {
      return res.status(500).send('Something broke!');
    }
    res.send(appointments);
  });
};

exports.returnAppointmentByStudentId = (req, res) => {
  Appointments.find(
    { studentId: req.params.studentId },
    (err, appointments) => {
      if (err) {
        return res.status(500).send('Something broke!');
      }
      res.send(appointments);
    }
  );
};

exports.returnAppointmentByTutorId = (req, res) => {
  Appointments.find({ tutorId: req.params.tutorId }, (err, appointments) => {
    if (err) {
      return res.status(500).send('Something broke!');
    }
    res.send(appointments);
  });
};
