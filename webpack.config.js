const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    },
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Bricks - new APP'
      })
    ],
    resolve:{
        extensions: ['.tsx', '.ts', '.js','.json']
    },
    module: {
        rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
         {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-typescript'],
              plugins: ["@babel/plugin-proposal-optional-chaining"]
            }
          }
        }]
      }
  }