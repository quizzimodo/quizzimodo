var jwt  = require('jwt-simple');
var User = require('../models/user.js');

module.exports = {
  errorLogger: function (error, req, res, next) {
    console.error(error.stack);
    next(error);
  },
  errorHandler: function (error, req, res, next) {
    res.status(500).send({error: error.message});
  },
  decode: function (req, res, next) {
    var token = req.headers['x-access-token'];

    if (token) {
      var decoded = jwt.decode(token, 'secret');
      
      if (decoded.exp <= Date.now()) {
        res.end('Access token has expired', 400);
      }

      User.forge({id: decoded.iss})
      .fetch({require: true})
      .then((user) => {
        req.user = user;
        next();
      })
      .catch((err) => next(err));
    } else {
      next();
    }
  },
  requireAuth: function(req, res, next) {
    if (!req.user) {
      res.end('Not authorized', 401);
    } else {
      next();
    }
  }
}