const axios = require('axios');
require('dotenv').config();

async function fetchNumberInfo(phoneNumber) {
  const apiKey = process.env.NUMVERIFY_API_KEY;
  const response = await axios.get(`http://apilayer.net/api/validate`, {
    params: {
      access_key: apiKey,
      number: phoneNumber
    }
  });

  return {
    valid: response.data.valid,
    number: response.data.number,
    country: response.data.country_name,
    location: response.data.location,
    carrier: response.data.carrier,
    line_type: response.data.line_type
  };
}

module.exports = { fetchNumberInfo };
