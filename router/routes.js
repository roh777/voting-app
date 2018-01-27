const express = require('express');
const router = express.Router();
const pollController = require('../controller/pollController');
const authController = require('../controller/authController');
const { catchErrors } = require('../handlers/errorHandlers');


router.get('/', pollController.homePage);

router.get('/logout', authController.logout);
router.get('/login', authController.login);
router.get('/newpoll', authController.isLoggedIn ,pollController.newpoll);
router.post('/newpoll', catchErrors(pollController.createNewPoll));

router.get('/auth/twitter/callback', authController.loginCallback);
router.get('/profile', authController.isLoggedIn, pollController.pollsbyUser);

router.get('/poll/:poll_id', catchErrors(pollController.showPoll));
router.post('/vote/:poll_id', catchErrors(pollController.vote));
router.get('/result/:poll_id', catchErrors(pollController.showResults));

router.get('/result/:poll_id/json', catchErrors(pollController.getJSONResult));


module.exports = router;