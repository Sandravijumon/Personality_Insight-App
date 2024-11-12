const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');  // Adjust the path to the Appointment model if necessary

// Route to get all appointments
router.get('/appointments', async (req, res) => {
    try {
        const appointments = await Appointment.find();  // Fetch all appointments
        res.json({ status: 'success', data: appointments });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Failed to retrieve appointments' });
    }
});

module.exports = router;
