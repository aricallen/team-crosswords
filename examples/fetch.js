const fetch = require('node-fetch');
const endpoint = `http://www.xwordinfo.com/JSON/TrackData.aspx`;

fetch(endpoint)
  .then((response) => response.json())
  .then((json) => {
    console.log(`json:`, json);
  });
