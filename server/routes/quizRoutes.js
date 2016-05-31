var helpers = require('../config/helpers.js');
var quizController = require('../controllers/quizController.js');

module.exports = function (app) {
  app.all(helpers.requireAuth);
  app.post('/submit', quizController.createQuiz);
  app.route('/:quiz_id')
    .get(quizController.getQuiz)
    .put(quizController.updateQuiz)
    .delete(quizController.deleteQuiz);
  app.get('/', quizController.getQuizzes);
};
