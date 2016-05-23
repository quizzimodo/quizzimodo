var path = require('path');
var db = require('knex')({
  client: 'sqlite3',
  connection: {
    database: 'quizzi_modo_db'
    charset: 'utf8',
    filename: path.join(__dirname, '../db/quizzi_modo.sqlite');
  }
});

db.schema.createTableIfNotExists('user', function(table) {
    table.increments('id').primary();
    table.string('username', 25);
    table.string('password', 20);
    table.string('name', 50);
    table.string('email', 50);
    table.boolean('active');
    table.timestamps();
});

db.schema.createTableIfNotExists('topic', function(table) {
  table.increments('id').primary();
  table.string('topic_name');
});

db.schema.createTableIfNotExists('quiz', function(table) {
  table.increments('id').primary();
  table.string('quiz_name');
  table.integer('topic').reference('topic.id');
  table.integer('created_by');
  table.boolean('public');
  table.dateTime('start');
  table.dateTime('end');
  table.boolean('active');
});

db.schema.createTableIfNotExists('quiz_invites', function(table) {
  table.increments('id');
  table.integer('quiz_id').references('quiz.id');
  table.integer('user_id').references('user.id');
});

db.schema.createTableIfNotExists('questions', function(table){
  table.increments('id').primary();
  table.integer('quiz_id').references('quiz.id');
  table.string('question', 300);
});

db.schema.createTableIfNotExists('answers', function(table) {
  table.increments('id').primary();
  table.integer('question_id').references('questions.id');
  table.string('answer_option', 200);
  table.string('correct', 200);
});

db.schema.createTableIfNotExists('user_attempts', function(table) {
  table.increments('id').primary();
  table.integer('user_id').references('user.id');
  table.integer('quiz_id').references('quiz.id');
  table.integer('passes');
  table.integer('fail');
  table.float('result');
});

db.schema.createTableIfNotExists('user_answers', function(table) {
  table.increments('id');
  table.integer('question_id').references('questions.id');
  table.integer('answer_id').references('answers.id');
  table.integer('attempt_id').references('user_attempts.id');
});

var Bookshelf = require('bookshelf')(db);
module.exports = Bookshelf;



