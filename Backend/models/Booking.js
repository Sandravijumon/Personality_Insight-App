const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  therapistId: { type: mongoose.Schema.Types.ObjectId, ref: 'Therapist' },
  bookedSlots: [{ type: String }],
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;