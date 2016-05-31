var User = require('../models/user.js');
var Users = require('../collections/users.js');
var Topics = require('../collections/topics.js');
var jwt = require('jwt-simple');

module.exports = {
  createUser: (req, res, next) =>
    User.forge({username: req.body.username})
    .fetch()
    .then((user) => {
      if (user) 
        next(new Error('User already exists'));
      else
        User.forge({
          username: req.body.username,
          password: req.body.password,
          name: req.body.name,
          email: req.body.email,
          bio: req.body.bio || null
        })
        .save()
        .then((user) => {
          var expires = new Date().addHours(1);
          var token = jwt.encode({iss: user.id, exp: expires}, 'secret');
          var data = {error: false, data: user, token: token};
          Topics.forge()
          .fetch({withRelated: ['subtopics']})
          .then((topics) => {
            data.topics = topics;
            res.json(data);
          })
          .catch((err) => next(err));
        })
        .catch((err) => next(err));
    })
    .catch((err) => next(err))
  ,
  deleteUser: (req, res, next) =>
    User.forge({user_id: req.params.user_id})
    .fetch()
    .then((user) =>
      user.save({active: false})
      .then((user) => res.json({error: false, data: {message: 'User successfully deleted'}}))
      .catch((err) => next(err))
    )
    .catch((err) => next(err))
  ,
  getUser: (req, res, next) =>
    User.forge({user_id: req.params.user_id})
    .fetch()
    .then((user) => res.json({error: false, data: user}))
    .catch((err) => next(err))
  ,
  getUsers: (req, res, next) =>
    Users.forge()
    .fetch()
    .then((users) => res.json({error: false, data: users}))
    .catch((err) => next(err))
  ,
  updateUser: (req, res, next) =>
    User.forge({user_id: req.params.id})
    .fetch()
    .then((user) =>
      user.save(req.body)
      .then((user) => res.json({error: false, data: {message: 'User updated successfully'}}))
      .catch((err) => next(err))
    )
    .catch((err) => next(err))
  ,
  signin: (req, res, next) => 
    User.forge({username: req.body.username})
    .fetch()
    .then((user) => {
      if (!user)
        next(new Error('User does not exist'));
      else
        user.comparePasswords(req.body.password)
        .then((isMatch) => {
          if (isMatch) {
            var expires = new Date().addHours(1);
            var token = jwt.encode({iss: user.id, exp: expires}, 'secret');
            var data = {error: false, data: user, token: token};
            Topics.forge()
            .fetch({withRelated: ['subtopics']})
            .then((topics) => {
              data.topics = topics;
              res.json(data);
            })
            .catch((err) => next(err));
          } else
            next(new Error('Invalid password'));
        })
        .catch((err) => next(err));
    })
    .catch((err) => next(err))  
};

Date.prototype.addHours = function(h) {
  this.setHours(this.getHours() + h);
  return this;
};