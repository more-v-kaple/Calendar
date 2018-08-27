const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

const webpackConfig = {
    devtool: 'inline-source-map',
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            'react-hot-loader/patch',
            './src/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    emitWarning: true,
                    configFile: path.join(__dirname, '../.eslintrc.json')
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules\/(?!(react-redux-toastr|react-select)\/).*/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        port: 3000,
        hot: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Headers": "Content-Type, Authorization, x-id, Content-Length, X-Requested-With",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new CaseSensitivePathsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
};

module.exports = merge(common, webpackConfig);
