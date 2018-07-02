const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
        }]),
        new BundleAnalyzerPlugin()
    ],
    mode: "development"
});
