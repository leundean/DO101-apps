const XKEY = process.env.EXAMPLE_KEY || 'invalid_key';
const XUNITS = process.env.EXAMPLE_UNITS || 'metric';

var express = require('express');
app = express();

app.get('/', function (req, res) {
  if (XKEY == "yessir"){
    res.send('<html><body bgcolor=#00ff00>Lets try some good ol HTML!<button>' + XUNITS + '</button></body></html>');
  }
  else {
    res.send('<html><body bgcolor=#ff0000>Lets try some good ol HTML!</body></html>');
  }
});

app.get('/another', function (req, res) {
  res.send('<html><body bgcolor=#aaff00>Lets try another!</body></html>');
});

app.get('/3', function (req, res) {
  res.send('<html><body bgcolor=#00aaff>EP3</body></html>');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

