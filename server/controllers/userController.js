var User = require('/../../db_config/models/user.js');
var jwt = require('jwt-simple');

module.exports = {
  signin: function(req, res)  {
    new User({username: req.body.username}).fetch().then(function(record) {
      if(!record){
        console.log('Record not found');
        res.redirect('/signin');
      } else {
        User.comparePasswords(req.body.password)
        .then(function(isMatch) {
          if (isMatch) {
            console.log('Record found');
            res.redirect('/main');
          } else {
            console.log('User authentication failed');
            res.redirect('/signin');
          }
        });
      }
    });
  },
  signup: function(req, res) {
    var user = new User({
      username: req.body.username,
      password: req.body.password,
      name: req.body.name,
      email: req.body.email,
      active: true
    });

    user.save().then(function(newUser) {
      Users.add(newUser);
      res.redirect('/main');
    });

  }
};