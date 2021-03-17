var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('<html><body bgcolor=#ffff00>Lets try some good ol HTML!</body></html>');
});

app.get('/another', function (req, res) {
  res.send('<html><body bgcolor=#aaff00>Lets try another!</body></html>');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

