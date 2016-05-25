var path = require('path');
var db = require('knex')({
  client: 'sqlite3',
  connection: {
    charset: 'utf8',
    filename: path.join(__dirname, '../db/quizzi_modo.sqlite')
  },
  useNullAsDefault: true
});

db.schema.hasTable('users').then(function(exists){
  if(!exists){
    db.schema.createTable('users', function(table){
        table.increments('id').primary();
        table.string('username', 25);
        table.string('password', 20);
        table.string('name', 50);
        table.string('email', 50);
        table.boolean('active');
        table.timestamps();
    }).then(function(table){
      console.log('Created table', table);
    });
  }
});

db.schema.hasTable('topic').then(function(exists){
  if(!exists){
    db.schema.createTable('topic', function(table){
      table.increments('id').primary();
      table.string('topic_name');
    }).then(function(table){
      console.log('Created table', table);
    });
  }
});

db.schema.hasTable('subtopic').then(function(exists){
  if(!exists){
    db.schema.createTable('subtopic', function(table){
      table.increments('id');
      table.integer('topic_id').references('topic.id');
      table.string('sub_topic');
    }).then(function(table){
      console.log('Created table', table);
    });
  }
});

db.schema.hasTable('quizzes').then(function(exists){
  if(!exists){
    db.schema.createTable('quizzes', function(table){
      table.increments('id').primary();
      table.string('quiz_name');
      table.integer('topic').references('topic.id');
      table.integer('created_by');
      table.boolean('public');
      table.dateTime('start');
      table.dateTime('end');
      table.boolean('active');
    }).then(function(table){
      console.log('Created table', table);
    });
  }
});

db.schema.hasTable('quiz_invitees').then(function(exists){
  if(!exists){
    db.schema.createTable('quiz_invitees', function(table){
      table.increments('id');
      table.integer('quiz_id').references('quizzes.id');
      table.integer('user_id').references('users.id');
    }).then(function(table){
      console.log('Created table', table);
    });
  }
});

db.schema.hasTable('questions').then(function(exists){
  if(!exists){
    db.schema.createTable('questions', function(table){
      table.increments('id').primary();
      table.integer('quiz_id').references('quizzes.id');
      table.string('question', 300);
    }).then(function(table){
      console.log('Created table', table);
    });
  }
});

db.schema.hasTable('answers').then(function(exists){
  if(!exists){
    db.schema.createTable('answers', function(table){
      table.increments('id').primary();
      table.integer('question_id').references('questions.id');
      table.string('answer_option', 200);
      table.string('correct', 200);
    }).then(function(table){
      console.log('Created table', table);
    });
  }
});


db.schema.hasTable('user_attempts').then(function(exists){
  if(!exists){
    db.schema.createTableIfNotExists('user_attempts', function(table){
      table.increments('id').primary();
      table.integer('user_id').references('users.id');
      table.integer('quiz_id').references('quizzes.id');
      table.integer('passes');
      table.integer('fail');
      table.float('result');
    }).then(function(table){
      console.log('Created table', table);
    });
  }
});

db.schema.hasTable('user_answers').then(function(exists){
  if(!exists){
    db.schema.createTable('user_answers', function(table){
      table.increments('id');
      table.integer('question_id').references('questions.id');
      table.integer('answer_id').references('answers.id');
      table.integer('attempt_id').references('user_attempts.id');
    }).then(function(table){
      console.log('Created table', table);
    });
  }
});

var Bookshelf = require('bookshelf')(db);
module.exports = Bookshelf;
