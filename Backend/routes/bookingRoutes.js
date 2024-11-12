const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

// Route to create a booking
router.post('/book', async (req, res) => {
  const { therapistId, bookingSlot } = req.body;

  try {
    const existingBooking = await Booking.findOne({ therapistId });
    if (existingBooking && existingBooking.bookedSlots.includes(bookingSlot)) {
      return res.status(400).json({ message: 'This slot is already booked.' });
    }

    if (existingBooking) {
      existingBooking.bookedSlots.push(bookingSlot);
      await existingBooking.save();
    } else {
      const newBooking = new Booking({ therapistId, bookedSlots: [bookingSlot] });
      await newBooking.save();
    }

    res.status(200).json({ message: 'Booking successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;