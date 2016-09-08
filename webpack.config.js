var webpack = require('webpack');
var path = require('path');
// var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'example'),
    entry: {
        js: './index.js',
        // vendor: []
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }, {
                test: /\.less$/,
                loader: 'style!css!less'
            }, {
                test: /\.css/,
                loader: 'style!css!less'
            }
        ]
    },
    resolve: {
        alias: {
            'react-speed': path.join(__dirname, '', 'src'),
        }
    },
    // postcss: [autoprefixer],
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {}
        }),
        // new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, './example/template.html')
        }),
        new OpenBrowserPlugin({url: 'http://127.0.0.1:5000/'})
    ]
};