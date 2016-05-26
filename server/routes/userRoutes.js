var userController = require('../controllers/userController.js');

module.exports = function (app) {
  app.get('/', userController.getUsers);
  app.get('/:id', userController.getUser);
  app.put('/:id', userController.updateUser);
  app.delete('/:id', userController.deleteUser);
  app.post('/signin', userController.signin);
  app.post('/signup', userController.createUser);
};
