const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|swf)$/,
                loader: 'file-loader?name=assets/[hash].[ext]',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
    // new ExtractTextPlugin(path.resolve(__dirname, 'css', 'style.css')),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        })
    ]
};

module.exports = config;
