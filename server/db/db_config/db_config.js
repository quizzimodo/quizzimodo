var path = require('path');
var sequence = require('when/sequence');
var _ = require('lodash');
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    charset: 'utf8',
    filename: './server/db/quizzimodo.db'
  },
  useNullAsDefault: true
});

var Bookshelf = require('bookshelf')(knex);
Bookshelf.plugin('registry');
module.exports = Bookshelf;
