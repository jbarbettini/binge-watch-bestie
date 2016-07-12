var Q = require('q');
var User = require('./user.js');


// Promisify a few mongoose methods with the `q` promise library
var findUser = Q.nbind(User.findOne, User);
var createUser = Q.nbind(User.create, User);

module.exports = {
  signin: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
  },

  signup: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
  },
};
