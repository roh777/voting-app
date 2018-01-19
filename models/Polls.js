const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
    created : {
        type: Date,
        default: Date.now
    },
    question : String,
    options : [
        {
            option : String,
            votes : {
                type: Number,
                default: 0
            }
        }
    ],
    author : {
        type : String,
        ref : 'User',
        required : true
    }
});

module.exports = mongoose.model('Poll', pollSchema);