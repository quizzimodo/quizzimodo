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
      console.log('questions: ', questions);
      bookshelf.knex('question').insert(questions)
      .then((questionIDs) => {
        console.log('questionIDs: ', questionIDs);
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
        console.log('answerOptions: ', answerOptions);
        bookshelf.knex('answer_option').insert(answerOptions)
        .then((answerOptionIDs) =>
          res.json({error: false, data: 'Quiz successfully added!'})
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
      .then((quiz) => res.json({error: false, data: {message: 'Quiz successfully deleted'}}))
      .catch((err) => next(err))
    )
    .catch((err) => next(err))
  ,
  getQuiz: (req, res, next) =>
    Quiz.forge({id: req.params.quiz_id})
    .fetch({require: true, withRelated: ['questions.answer_options', 'attempts.user_answers']})
    .then((quiz) => {
      console.log("quiz.related('questions'): ", quiz.related('questions'));
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
  getQuestions: (quiz, req, res, next) =>
    Questions.forge()
    .query
};