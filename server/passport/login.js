var LocalStrategy = require('passport-local').Strategy;
var UserModel = require('../models/user.model.js')

module.exports = function(passport) {
    passport.use('login', new LocalStrategy({
            passReqToCallback: true
        },
        function(req, username, password, done) {
            console.log("qqqqqqqqqqq",req.body)
            UserModel.findOne({
                'username': username,
                'password': password
            }, function(err, user) {
                /* mongo server error */
                console.log("qqqqqqqqqqq",user)
                if (err) return done(err);
                /* user will be null if no match is found  */
                return done(null, user);
            })
        }

    ))
}
