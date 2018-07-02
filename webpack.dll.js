const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(base, {
    mode: 'production',
    entry: {
        dll: [
            './src/dll.js'
        ]
    },
    output: {
        path: path.resolve('./public/'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new CleanWebpackPlugin(['public']), //清楚dist文件夹
        new webpack.DllPlugin({
            path: path.resolve('./public', '[name]-manifest.json'),
            name: '[name]_library'
        }),
        // new BundleAnalyzerPlugin()
    ]
});
