const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');
const app = express();
const fetch = require('node-fetch');
const endpoint = `http://www.xwordinfo.com/JSON/TrackData.aspx`;

const hbs = exphbs.create({
  layoutsDir: `${__dirname}/views/layouts`,
  defaultLayout: 'main',
  extname: '.hbs'
});

app.engine('.hbs', hbs.engine);


app.set('view engine', '.hbs');

app.get('/', function (req, res) {
  const viewPath = `${__dirname}/views/root.hbs`;
  res.render(viewPath, {
    data: 'alsdkfj'
  });
});

app.get('/json', function (req, res) {
  fetch(endpoint)
    .then((response) => response.json())
    .then((json) => {
      const viewPath = `${__dirname}/views/json.hbs`;
      res.render(viewPath, {
        json: JSON.stringify(json)
      });
    });
});

app.listen(3000);
