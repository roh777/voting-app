const passport = require('passport');
const User = require('../models/User');

exports.login = passport.authenticate('twitter');

exports.loginCallback = passport.authenticate('twitter', {
    successRedirect: '/profile',
    failureRedirect: '/'
});

exports.isLoggedIn = (req, res, next) => {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    res.redirect('/');
};

exports.logout = (req, res) => {
    req.logout();
    res.redirect('/');
}


