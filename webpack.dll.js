const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');

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
        new webpack.DllPlugin({
            path: path.resolve('./public', '[name]-manifest.json'),
            name: '[name]_library'
        })
    ]
});
