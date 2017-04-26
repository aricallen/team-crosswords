const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');
const app = express();

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

app.listen(3000);
