var express = require('express');

var app = express();

// update with correct public folder
app.use(express.static(__dirname + ''));

app.listen(8008, function() {
  console.log('Quizzimodo listening on port 8008');
});
