const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  phoneNumber: String,
  region: String,
  reportText: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Report', reportSchema);
