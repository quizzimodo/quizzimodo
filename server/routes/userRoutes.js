var helpers = require('../config/helpers.js');
var userController = require('../controllers/userController.js');

module.exports = function (app) {
  app.route('*').all(helpers.decode);

  app.get('/', userController.getUsers);
  app.post('/signin', userController.signin);
  app.post('/signup', userController.createUser);

  app.route('/:user_id')
    .all(helpers.requireAuth)
    .get(userController.getUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

};
