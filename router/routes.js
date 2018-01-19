const express = require('express');
const router = express.Router();
const pollController = require('../controller/pollController');
const authController = require('../controller/authController');

router.get('/', pollController.homePage);

router.get('/login', authController.login);
router.get('/newpoll', authController.isLoggedIn ,pollController.newpoll);
router.post('/newpoll', pollController.createNewPoll);

router.get('/auth/twitter/callback', authController.loginCallback);
router.get('/profile', authController.isLoggedIn, (req, res)=> {
    res.render('profile', { user: req.user, title: 'Success'});
});

module.exports = router;