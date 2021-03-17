var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hellou World of Clouds!\n');
});

app.get('/another', function (req, res) {
  res.send('Hellou anouther!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

