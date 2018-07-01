const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = merge(common, {
    devtool: 'eval',
    devServer: {
        contentBase: './public'
    },
    plugins: [
        new WriteFilePlugin(),
        new CopyWebpackPlugin([{
            from: "src/vapi",
            to: "vapi",
            force: true
        }])
    ],
    mode: "development"
});
