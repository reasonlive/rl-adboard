const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const webpack = require('webpack');
require('babel-polyfill')

module.exports = {

entry: ['babel-polyfill', './src/index.js'],
mode: 'development',
  output: {
    publicPath: './',
    path: __dirname + "/public",
    filename: "bundle-[fullhash].js"
  },

  devServer: {
    open:true,
    hot:true
  },

  module: {
    rules: [
    
      {test: /\.png$/, use: 'file-loader'},
      {test: /\.js$/, use: 'babel-loader'},
      {test: /\.vue$/, use: 'vue-loader'},
      {test: /\.css$/, use: ['vue-style-loader','style-loader', 'css-loader']},
      {test: /\.sass$/, use: 
        ['vue-style-loader','style-loader','css-loader',
          {
            loader: 'sass-loader', options: {
              sassOptions:{
                indentedSyntax: true
              }  
              
            }
          }
        ]
      }

    ]
  },
  resolve: {
    alias: {
      "vue$" : 'vue/dist/vue.esm-bundler.js'
    }
  },
  plugins: [

    new HtmlWebpackPlugin({template: './src/index.html'}),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin()

  ]
}
