const Poll = require('../models/Polls')

exports.homePage = async (req, res) => {
    const polls = await Poll.find().limit(5).sort({created : 'desc'});
    res.render('index', {title : 'Home', user : req.user, polls});
};


exports.newpoll = (req, res) => {
    res.render('newpoll');
}

exports.pollsbyUser = async (req, res) => {
    const user = req.user._id;
    const polls = await Poll.find({author : user});
    res.render('profile', {polls});
}

exports.createNewPoll = async (req, res) => {
    req.body.author = req.user._id;
    let optArr = [];

    //convert every poll option to an object with corresponding votes
    req.body.options.forEach((option) => {
        optArr.push({ option : option, votes : 0})
    });

    const newPoll = new Poll({
        question : req.body.question,
        author : req.user._id,
        options : optArr
    });

    await newPoll.save();
    res.redirect(`/poll/${newPoll.id}`);
}

exports.vote = async (req, res) => {
    const poll_id = req.params.poll_id;
    const choice = req.body.choice;

    await Poll.update({_id : poll_id, "options.option": choice},
        { $inc: { "options.$.votes": 1 } }
    ).exec();

    res.redirect(`/result/${poll_id}`);
  

}

exports.showResults = async (req, res) => {
    const poll_id = req.params.poll_id;
    const poll =  await Poll.findById({_id : poll_id});
    res.render('result', {poll});
}

exports.showPoll = async (req, res, next) => {
    const poll_id = req.params.poll_id;
    const poll = await Poll.findById({_id : poll_id}).populate('author');
    if(!poll) return next();
    res.render('poll', {poll});
}