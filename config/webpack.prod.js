const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

const buildPath = '../build';

const webpackConfig = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, buildPath),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Life on a paper',
            template: 'src/assets/templates/index.html'
        }),
        new HtmlBeautifyPlugin({
            config: {
                html: {
                    end_with_newline: true,
                    indent_size: 4,
                    indent_inner_html: true,
                    extra_liners: []
                }
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};

module.exports = merge(common, webpackConfig);
