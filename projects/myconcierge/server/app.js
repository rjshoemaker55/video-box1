const express = require('express');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');
const port = 4000;

app.use(cors());

let options = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
    'x-rapidapi-key': '2f3a0e5559mshf0b9a7a94324ff7p1bf4dajsna06e1715474c',
  },
};

app.get('/locationid/:cityName', async (req, res) => {
  console.log('Hit locationid GET route');

  let destCity = req.params.cityName;

  let locationQueryString = `
    https://tripadvisor1.p.rapidapi.com/locations/auto-complete?lang=en_US&units=mi&query=${destCity}
  `;

  const locationQuery = await fetch(locationQueryString, options);
  const locationResponse = await locationQuery.json();
  res.send(locationResponse.data[0].result_object.location_id);
});

app.get('/hotellist/:locationid/:checkin/:nights', async (req, res) => {
  console.log('Hit hotellist GET route');

  let locationId = req.params.locationid;
  let checkIn = req.params.checkin;
  let nights = req.params.nights;

  let hotelListQueryString = `https://tripadvisor1.p.rapidapi.com/hotels/list?offset=0&currency=USD&limit=30&order=asc&lang=en_US&sort=recommended&location_id=${locationId}&adults=1&checkin=${checkIn}&rooms=1&nights=${nights})`;

  const hotelListQuery = await fetch(hotelListQueryString, options);
  const hotelListResponse = await hotelListQuery.json();
  res.send(hotelListResponse.data);
});

app.listen(port, () => console.log(`app listening on port ${port}`));
