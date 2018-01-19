const Poll = require('../models/Polls')

exports.homePage = (req, res) => {
    res.render('index', {title : 'Home', user : req.user});
};


exports.newpoll = (req, res) => {
    res.render('newpoll');
}

exports.createNewPoll = async (req, res) => {
    req.body.author = req.user._id;
    let optArr = [];

    req.body.options.forEach((option) => {
        optArr.push({ option : option, votes : 0})
    });

    const newPoll = new Poll({
        question : req.body.question,
        author : req.user._id,
        options : optArr
    });

    await newPoll.save();
    res.send(newPoll);
}