var bookshelf = require('../db/db_config/db_config.js');
var Question = require('../models/question.js');

var Questions = bookshelf.Collection.extend({
  model: Question
});

module.exports = bookshelf.collection('Questions', Questions);
