var bookshelf = require('../db/db_config/db_config.js');
var Quiz = require('../models/quiz.js');
var Question = require('../models/question.js');
var AnswerOption = require('../models/answer_option.js');
var Quizzes = require('../collections/quizzes.js');
var Questions = require('../collections/questions.js');

module.exports = {
  createQuiz: (req, res, next) => {
    var newQuiz = req.body;
    bookshelf.knex('quiz').insert({
      subtopic_id: newQuiz.subtopic_id,
      quiz: newQuiz.quiz,
      details: newQuiz.details,
      public: newQuiz.public,
      start: newQuiz.start,
      end: newQuiz.end,
      created_by: newQuiz.created_by,
      active: true
    })
    .then((quizID) => {
      var questions = newQuiz.questions.map((question) => {
        return {
          quiz_id: quizID[0],
          question: question.question
        }
      });
      // console.log('questions: ', questions);
      bookshelf.knex('question').insert(questions)
      .then((questionIDs) => {
        // console.log('questionIDs: ', questionIDs);
        var answerOptions = [];
        newQuiz.questions.forEach((question, idx) =>
          question.answer_options.forEach((answer_option) => {
            var answerOption = {
              question_id: questionIDs[0] + idx,
              answer: answer_option.answer,
              correct: answer_option.correct || false
            }
            answerOptions.push(answerOption);
          })
        );
        // console.log('answerOptions: ', answerOptions);
        bookshelf.knex('answer_option').insert(answerOptions)
        .then((answerOptionIDs) =>
          res.json({error: false, message: 'Quiz successfully added!'})
        )
        .catch((err) => next(err));
      })
      .catch((err) => next(err));
    })
    .catch((err) => next(err));
  },
  deleteQuiz: (req, res, next) => 
    Quiz.forge({quiz_id: req.params.quiz_id})
    .fetch({require: true})
    .then((quiz) =>
      quiz.save({active: false})
      .then((quiz) => res.json({error: false, message: 'Quiz successfully deleted'}))
      .catch((err) => next(err))
    )
    .catch((err) => next(err))
  ,
  getQuiz: (req, res, next) =>
    Quiz.forge({id: req.params.quiz_id})
    .fetch({require: true, withRelated: ['questions.answer_options', 'attempts.user_answers']})
    .then((quiz) => {
      // console.log("quiz.related('questions'): ", quiz.related('questions'));
      res.json({error: false, data: quiz})
    })
    .catch((err) => next(err))
  , 
  getQuizzes: (req, res, next) =>
    Quizzes.forge()
    .fetch()
    .then((quizzes) => res.json({error: false, data: quizzes}))
    .catch((err) => next(err))
  ,
  updateQuiz: (req, res, next) =>
    Quiz.forge({quiz_id: req.params.quiz_id})
    .fetch({require: true})
    .then((quiz) =>
      quiz.save(req.body)
      .then((quiz) => res.json({error: false, message: 'Quiz updated successfully'}))
      .catch((err) => next(err))
    )
    .catch((err) => next(err))
  ,
  createAttempt: (req, res, next) => {
    var pass_count = 0, 
      fail_count = 0, 
      result = 0.0,
      quiz = req.body;

    quiz.questions.forEach((question) => {
      var pass = false;
      question.answer_options.forEach((answer_option) => {
        if (answer_option.id === question.userAnswer) {
          pass = true;
        }
      });
      if(pass) {
        pass_count++;
      } else {
        fail_count++;
      }
    });

    result = pass_count / (pass_count + fail_count);
    // console.log('req.user', req.user);
    bookshelf.knex('attempt').insert({
      quiz_id: quiz.id,
      user_id: req.body.userID,
      pass_count: pass_count,
      fail_count: fail_count,
      result: result
    })
    .then((attemptID) => {
      var user_answers = [];
      quiz.questions.forEach((question) => 
        user_answers.push({attempt_id: attemptID[0], answer_option_id: question.userAnswer})
      );
      bookshelf.knex('user_answer').insert(user_answers)
      .then((userAnswerID) =>
        res.json({error: false, message: 'Results saved!'})
      )
      .catch((err) => next(err));
    })
    .catch((err) => next(err));
  }
};