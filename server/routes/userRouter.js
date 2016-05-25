var userController = require('../controllers/userController.js');

module.exports = function (app) {
  app.post('/signin', userController.signin);
  app.post('/signup', userController.signup);
};
