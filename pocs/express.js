const express = require('express');
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  console.log('hello console');
});

var server = app.listen(3000, () => {});
