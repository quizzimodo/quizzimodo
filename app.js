var app = require('./server/server.js');
app.listen(process.env.PORT || 8008, function() {
  console.log('Quizzimodo listening on port 8008');
});