/**Указывает правильные пути */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCss = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    },

  devServer: {
    static: path.resolve(__dirname, './dist'),
  },

  experiments: {
    topLevelAwait: true,
  },

  module: {
    rules:[
      {
      test: /\.s[ac]ss$/i,
      use: [
        MiniCss.loader,
        'css-loader',
        'sass-loader'
      ]
      },
      //картинки
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      //шрифты и svg
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
    },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
        title: 'GeekBrains Shop JS2',
        template: path.resolve(__dirname, './src/public/template.html'), // шаблон
        filename: 'index.html', // название выходного файла
    }),

    new MiniCss({
        filename: 'style.css',
        chunkFilename: '[id].css',
    }),

    new webpack.HotModuleReplacementPlugin(),
  ],
}