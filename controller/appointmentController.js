const Appointments = require('../models/Appointments');

exports.returnAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointments.find({});
    res.send(appointments);
  } catch (err) {
    res.status(500).send('Something broke!');
  }
};

exports.returnAppointmentByStudentId = async (req, res) => {
  try {
    const appointments = await Appointments.find({
      studentId: req.params.studentId,
    });
    res.send(appointments);
  } catch (err) {
    res.status(500).send('Something broke!');
  }
};

exports.returnAppointmentByTutorId = async (req, res) => {
  try {
    const appointments = await Appointments.find({
      tutorId: req.params.tutorId,
    });
    res.send(appointments);
  } catch (err) {
    res.status(500).send('Something broke!');
  }
};
