var path = require('path');
var sequence = require('when/sequence');
var _ = require('lodash');
var knex;

module.exports = () => {
  console.log('DATABASE_URL: ', process.env.DATABASE_URL);
  if (process.env.DATABASE_URL) {
    knex = require('knex')({
      client: 'pg',
      connection: process.env.DATABASE_URL
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

  var Schema = require('./schema.js');
  var Demo = require('./demo.js');

  var dropTables = () => {
    var tableNames = _.keys(Schema);
    tableNames.reverse();
    var tables = _.map(tableNames, (tableName) => () => knex.schema.dropTableIfExists(tableName));
    return sequence(tables);
  };

  var createTable = (tableName) => {
    return knex.schema.createTableIfNotExists(tableName, function (table) {
      console.log(`creating table ${tableName}...`);
      var column;
      var columnKeys = _.keys(Schema[tableName]);
      _.each(columnKeys, function (key) {
        console.log(`creating column ${key} in table ${tableName}...`);
        if (Schema[tableName][key].type === 'text' && Schema[tableName][key].hasOwnProperty('fieldtype')) {
          column = table[Schema[tableName][key].type](key, Schema[tableName][key].fieldtype);
        }
        else if (Schema[tableName][key].type === 'string' && Schema[tableName][key].hasOwnProperty('maxlength')) {
          column = table[Schema[tableName][key].type](key, Schema[tableName][key].maxlength);
        }
        else {
          column = table[Schema[tableName][key].type](key);
        }

        if (Schema[tableName][key].hasOwnProperty('nullable') && Schema[tableName][key].nullable === true) {
          column.nullable();
        }
        else {
          column.notNullable();
        }

        if (Schema[tableName][key].hasOwnProperty('primary') && Schema[tableName][key].primary === true) {
          column.primary();
        }

        if (Schema[tableName][key].hasOwnProperty('unique') && Schema[tableName][key].unique) {
          column.unique();
        }
        
        if (Schema[tableName][key].hasOwnProperty('unsigned') && Schema[tableName][key].unsigned) {
          column.unsigned();
        }
        
        if (Schema[tableName][key].hasOwnProperty('references')) {
          column.references(Schema[tableName][key].references);
        }
        
        if (Schema[tableName][key].hasOwnProperty('defaultTo')) {
          column.defaultTo(Schema[tableName][key].defaultTo);
        }
      });
      table.timestamps(false, true);
    });
  }

  var createTables = () => {
    var tableNames = _.keys(Schema);
    var tables = _.map(tableNames, (tableName) => () => createTable(tableName));
    return sequence(tables);
  };

  var importTableRecords = (tableName, records) => knex(tableName).insert(records);

  var importDemo = () => {
    var demoData = _.map(Demo, (tableRecords) => () => importTableRecords(tableRecords.table, tableRecords.records));
    return sequence(demoData);
  }

  dropTables()
  .then(() => {
    console.log('Tables dropped!');
    createTables()
    .then(() => {
      console.log('Tables created!');
      importDemo()
      .then(() => {
        console.log('Demo data imported!'); 
        process.exit(0);
      })
      .catch((error) => { throw error });
    })
    .catch((error) => { throw error });
  })
  .catch((error) => { throw error });
}