var helpers = require('./helpers.js');

module.exports = function (app, express) {
  var bodyParser = require('body-parser')
  var userRouter = express.Router();
  var quizRouter = express.Router();

  app.use(express.static(__dirname + '/../../public'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api/users', userRouter);
  app.use('/api/quizzes', quizRouter);

  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);

  require('../routes/userRoutes.js')(userRouter);
  require('../routes/quizRoutes.js')(quizRouter);
};
