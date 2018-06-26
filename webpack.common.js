const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
      app: './src/index.js'
  },
  module: {
      rules: [{
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
      }]
  },
  plugins: [
      new CleanWebpackPlugin(['dist']), //清楚dist文件夹
      new HtmlWebpackPlugin({ //根据生成的chunk动态生成html
          title: 'Caching'
      }),
      new webpack.HashedModuleIdsPlugin(), //包id不再使用计数器，防止顺序变了hash变
  ],
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
      runtimeChunk: 'single',
      splitChunks: {
          cacheGroups: {
              vendor: {
                  test: /[\\/]node_modules[\\/]/,
                  name: "vendors",
                  chunks: "all"
              }
          }
      }
  }
};