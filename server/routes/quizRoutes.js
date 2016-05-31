var helpers = require('../config/helpers.js');
var quizController = require('../controllers/quizController.js');

module.exports = function (app) {
  // app.all('*', helpers.requireAuth);
  app.route('/')
    .get(quizController.getQuizzes)
    .post(quizController.createQuiz);
  app.post('/submit', quizController.createAttempt);
  app.route('/:quiz_id')
    .get(quizController.getQuiz)
    .put(quizController.updateQuiz)
    .delete(quizController.deleteQuiz);
};
