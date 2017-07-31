var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /.ts$/, loader: 'awesome-typescript-loader' }
        ]
    }
};