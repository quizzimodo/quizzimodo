var path = require('path');
var sequence = require('when/sequence');
var _ = require('lodash');
var knex;

if (process.env.DATABASE_URL) {
  knex = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true
  });
} else {
  knex = require('knex')({
    client: 'sqlite3',
    connection: {
      charset: 'utf8',
      filename: './server/db/quizzimodo.db'
    },
    useNullAsDefault: true
  });
}


var Bookshelf = require('bookshelf')(knex);
Bookshelf.plugin('registry');
module.exports = Bookshelf;
