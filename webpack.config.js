var path = require('path');

module.exports = {
    entry: './src/index.ts',
    module: {
        loaders: [
            { test: /.ts$/, loader: 'awesome-typescript-loader' }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'bundle.js'
    }
};