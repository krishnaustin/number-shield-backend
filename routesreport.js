const express = require('express');
const router = express.Router();
const Report = require('../models/Report');

router.post('/', async (req, res) => {
  const { phoneNumber, region, reportText } = req.body;
  try {
    const newReport = new Report({ phoneNumber, region, reportText });
    await newReport.save();
    res.json({ message: 'Report submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit report' });
  }
});

module.exports = router;
