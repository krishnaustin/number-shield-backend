const express = require("express");
const router = express.Router();

// Example lookup route
router.get("/:number", async (req, res) => {
  const number = req.params.number;
  // You would search your database here
  res.json({
    number,
    isSpam: false,
    reportedCount: 0,
    country: "Unknown",
  });
});

module.exports = router;

