var webpack = require('webpack');

module.exports = {
    entry: ['./src/client/index'],
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    module: {
        loaders:[{
            test: /\.jsx?$/,
            loader: 'babel',
            include: './src'
        }]
    }
};