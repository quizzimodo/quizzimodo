var userController = require('../controllers/userController.js');

module.exports = function (app) {
  app.route('/:id')
    .get(userController.getUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);
  
  app.get('', userController.getUsers);
  app.post('/signin', userController.signin);
  app.post('/signup', userController.createUser);
};
