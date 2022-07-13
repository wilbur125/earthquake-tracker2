require('dotenv').config();

const {Client} = require("@googlemaps/google-maps-services-js");

const client = new Client({});

function getGeocode() {
  client
  .geocode({
    params: {
      key: process.env.GOOGLE_MAPS_API_KEY,
      address: 'Seattle, WA'
    },
    timeout: 1000 // milliseconds
  })
  .then(gcResponse => {
    const str = JSON.stringify(gcResponse.data.results[0]);
    console.log(`First result is: ${str}`);
  })
  .catch(e => {
    console.log(e);
  })
  .finally(() => {
    console.log('done');
  })
}

module.exports = getGeocode();