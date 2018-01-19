const path = require('path');

module.exports = {
    entry : './public/javascript/main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    }
}