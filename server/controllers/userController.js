var User = require('../../db_config/models/user.js');
var jwt = require('jwt-simple');

module.exports = {
  signin: function (req, res, next)  {
    User.forge({username: req.body.username})
    .fetch()
    .then(function (user) {
      if (!user) {
        next(new Error('User does not exist'));
      } else {
        user.comparePasswords(req.body.password)
        .then(function (isMatch) {
          if (isMatch) {
            user.token = jwt.encode(user, 'secret');
            res.json(user);
          } else {
            next(new Error('Invalid password'));
          }
        });
      }
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
  },

  createUser: function (req, res, next) {
    var newUser = User.forge({
      username: req.body.username,
      password: req.body.password,
      name: req.body.name,
      email: req.body.email,
      active: true
    });

    User.forge({username: newUser.username})
    .fetch()
    .then(function (user) {
      if (user) {
        next(new Error('User already exists'));
      } else {
        newUser.save()
        .then(function (user) {
          user.token = jwt.encode(user, 'secret');
          res.json(user);
        });
      }
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
  }
};
