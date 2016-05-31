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
    // console.log('enter decode');
    // console.log('req.headers: ', req.headers);
    var token = req.headers['x-access-token'];
    // console.log('token: ', token);
    if (token && token !== 'undefined') {
      // console.log('has token?');
      var decoded = jwt.decode(token, 'secret');
      // console.log('decoded: ', decoded);
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
      // console.log('exit decode');
      next();
    }
  },
  requireAuth: function(req, res, next) {
    // console.log('requireAuth req.user: ', req.user);
    if (!req.user) {
      res.end('Not authorized', 401);
    } else {
      next();
    }
  }
}