require('dotenv').config();

const {Client} = require("@googlemaps/google-maps-services-js");

const client = new Client({});

client
  .elevation({
    params: {
      locations: [{ lat: 45, lng: -110 }],
      key: process.env.GOOGLE_MAPS_API_KEY
    },
    timeout: 1000 // milliseconds
  })
  .then((r) => {
    let mapRes = r.data.results[0].elevation;
    console.log(mapRes)
  })
  .catch(e => {
    console.log(e);
  });