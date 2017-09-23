const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        './app/index.js'
    ],
    output: {
        publicPath: 'http://localhost:7500/js/react/',
        filename: 'react-bundle.js'
    },
    devServer: {
        host: '0.0.0.0',
        port: 7500,
        hot: true,
        inline: true,
        headers: { 'Access-Control-Allow-Origin': '*' }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader?cacheDirectory',
                exclude: /(node_modules)/,
                query: {
                    presets: ['es2015', 'react', 'react-hmre']
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
