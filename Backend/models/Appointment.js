const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  empid: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneno: { type: String, required: true },
  appointmentDate: { type: Date, required: true },
  appointmentTime: { type: String, required: true }, // Time in 'HH:mm' format
}, { timestamps: true });

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
