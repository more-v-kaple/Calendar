const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const aliases = require('./aliases');

const extractSass = new ExtractTextPlugin({
    filename: 'bundle.css',
    allChunks: true,
    disable: process.env.NODE_ENV === 'development'
});

const webpackConfig = {
    resolve: {
        alias: aliases,
        modules: ['node_modules', 'src'],
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                loader: 'raw-loader'
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|ttf)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'url-loader'
                }]
            },
            {
                test: /\.ico$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'file-loader?name=[name].[ext]'
                }]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['css-hot-loader'].concat(extractSass.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                }))
            }
        ]
    },
    plugins: [
        extractSass
    ]
};

module.exports = webpackConfig;
