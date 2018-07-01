const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const findEntry = require('./find-entry');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');

let entries = findEntry();

module.exports = merge(base, {
    entry: {
        entry: './src/entry.js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: [
                    /[\/]common[\/]/,
                    /node_modules/
                ],
                loader: 'babel-loader'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ //根据生成的chunk动态生成html
            template: './src/index.html',
            // chunks: ['index', 'app']
        }),
        // new webpack.HashedModuleIdsPlugin(), //包id不再使用计数器，防止顺序变了hash变
        new webpack.DefinePlugin({
            entries
        }),
        new webpack.DllReferencePlugin({
            manifest: require('./public/dll-manifest.json')
        })
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public')
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                'mod-common': {
                    test: /home\/mod-common[\\/]/,
                    chunks: 'all',
                    name: 'mod-common'
                }
            }
        }
    }
});
