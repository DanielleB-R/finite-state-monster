var webpack = require('webpack');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
            }
        ]
    }
};
