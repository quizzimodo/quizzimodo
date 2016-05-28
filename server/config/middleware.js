var helpers = require('./helpers.js');
var bodyParser = require('body-parser')

module.exports = function (app, express) {
  app.use(express.static(__dirname + '/../../public'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  
  var userRouter = express.Router();
  var quizRouter = express.Router();

  app.use('/api/users', userRouter);
  app.use('/api/quizzes', quizRouter);

  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);

  require('../routes/userRoutes.js')(userRouter);
  require('../routes/quizRoutes.js')(quizRouter);
};
