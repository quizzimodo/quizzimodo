var helpers = require('./helpers.js');

module.exports = function (app, express) {
  var userRouter = express.Router();

  app.use(express.static(__dirname + '/../../public'));
  
  app.use('/api/users', userRouter);

  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);

  require('../routes/userRoutes.js')(userRouter);
};
