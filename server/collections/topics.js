var bookshelf = require('../db/db_config/db_config.js');
var Topic = require('../models/topic.js');

var Topics = bookshelf.Collection.extend({
  model: Topic
});

module.exports = bookshelf.collection('Topics', Topics);
