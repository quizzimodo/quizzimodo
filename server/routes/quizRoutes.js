var quizController = require('../controllers/quizController.js');

module.exports = function (app) {
  app.get('/', quizController.getQuizzes);
  app.get('/:id', quizController.getQuiz);
  app.post('/new', quizController.createQuiz);
  app.put('/:id', quizController.updateQuiz);
  app.delete('/:id', quizController.deleteQuiz);
};
