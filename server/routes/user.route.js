var express = require('express');
var router = express.Router();


module.exports = function(passport) {
    
    /* login action using passport*/
    router.post('/login', function(req, res, next) {
        passport.authenticate('login', function(err, user, info) {
            if (err) return res.status(500).json({
                message: 'Server Error'
            });
            else if (user) {
                return res.status(200).json({
                    user: user
                });
            } else return res.status(500).json({
                message: 'Invalid User'
            });
        })(req, res, next);
    });

    /* user signup action to save user data in mongodb using passport*/
    router.post('/signup', function(req, res, next) {
        passport.authenticate('signup', function(err, newUser, info) {
            if (err) return res.status(500).json({
                status: 'signup failed'
            });
            else if (newUser) return res.status(200).json({
                status: 'signup success'
            });
            else return res.status(500).json({
                status: 'username already exsist'
            });
        })(req, res, next);
    });

  
 

    router.get('/logout', function(request, response) {
        request.session.destroy(function(req, res, err) {
            if (err) {
                console.log("status of error in logout" + err);
                response.status(500).json({
                    status: 'error in logout'
                });
            } else {
                response.status(200).json({
                    status: 'success'
                });
            }
        });
    });

    return router;
}
