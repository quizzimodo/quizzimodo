var Quiz = require('../models/quiz.js');
var Quizzes = require('../collections/quizzes.js');

module.exports = {
  createQuiz: (req, res, next) => {
    Quiz.forge(req.body)
    .then((quiz) =>
      quiz.save()
      .then((quiz) => res.json(quiz))
      .catch((err) => next(err))
    )
    .catch((err) => next(err));
  },
  deleteQuiz: (req, res, next) => {
    Quiz.forge({id: req.body.id})
    .fetch()
    .then((quiz) =>
      quiz.save({active: false})
      .then((quiz) => res.json({error: false, data: {message: 'Quiz successfully deleted'}}))
      .catch((err) => next(err))
    )
    .catch((err) => next(err));
  },
  getQuiz: (req, res, next) => {
    Quiz.forge({id: req.body.id})
    .fetch()
    .then((quiz) => res.json(quiz))
    .catch((err) => next(err));
  }, 
  getQuizzes: (req, res, next) => {
    Quizzes.forge()
    .fetch()
    .then((quizzes) => res.json(quizzes))
    .catch((err) => next(err));
  },
  updateQuiz: (req, res, next) => {
    Quiz.forge({id: req.body.id})
    .fetch()
    .then((quiz) =>
      quiz.save(req.body)
      .then((quiz) => res.json({error: false, message: 'Quiz updated successfully'}))
      .catch((err) => next(err))
    )
    .catch((err) => next(err));
  }
};