const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const javascript = {
    test: /\.(js)$/,
};

const styles = {
    test: /\.(scss)$/,
    use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
};

const config = {
    entry: {
        App: './public/javascript/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'public', 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [javascript, styles]
    },

    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};

process.noDeprication = true;
module.exports = config;


// module.exports = {
//     entry: ['./app.js', './scss/style.scss'],
//     output: {
//         filename: 'dist/bundle.js'
//     },
//     module: {

//         rules: [
//             /*
//             your other rules for JavaScript transpiling go in here
//             */
//             { // regular css files
//                 test: /\.css$/,
//                 loader: ExtractTextPlugin.extract({
//                     loader: 'css-loader?importLoaders=1',
//                 }),
//             },
//             { // sass / scss loader for webpack
//                 test: /\.(scss)$/,
//                 loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
//             }
//         ]
//     },
//     plugins: [
//         new ExtractTextPlugin({ // define where to save the file
//             filename: 'dist/style.css',
//             allChunks: true,
//         }),
//     ],
// };