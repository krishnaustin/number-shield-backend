const express = require('express');
const router = express.Router();
const Report = require('../models/Report');
const { fetchNumberInfo } = require('../utils/numVerify');

router.get('/:number', async (req, res) => {
  const number = req.params.number;
  try {
    const info = await fetchNumberInfo(number);
    const reports = await Report.find({ phoneNumber: number });

    res.json({
      ...info,
      reports,
      reportCount: reports.length
    });
  } catch (error) {
    res.status(500).json({ error: 'Lookup failed' });
  }
});

module.exports = router;
