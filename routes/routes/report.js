const express = require("express");
const router = express.Router();

// Example report route
router.post("/", async (req, res) => {
  const { number, reason } = req.body;

  // Here you'd save the report to your database
  res.json({
    message: "Report received!",
    number,
    reason,
  });
});

module.exports = router;
