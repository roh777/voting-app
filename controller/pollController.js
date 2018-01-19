const Poll = require('../models/Polls')

exports.homePage = (req, res) => {
    res.render('index', {title : 'Home', user : req.user});
};


exports.newpoll = (req, res) => {
    res.render('newpoll');
}

exports.createNewPoll = async (req, res) => {
    req.body.author = req.user._id;
    console.log('saving', req.body);
    const newPoll = await (new Poll(req.body)).save();
    res.send(req.body);
    
}