const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const lookupRoute = require('./routes/lookup');
const reportRoute = require('./routes/report');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/lookup', lookupRoute);
app.use('/api/report', reportRoute);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
