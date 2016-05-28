var quizController = require('../controllers/quizController.js');

module.exports = function (app) {
  app.route('/:user_id')
    .get(quizController.getQuizzes)
    .post(quizController.createQuiz);
  
  app.route('/:user_id/:quiz_id')
    .get(quizController.getQuiz)
    .put(quizController.updateQuiz)
    .delete(quizController.deleteQuiz);
};
