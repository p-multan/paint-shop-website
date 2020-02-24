const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    basic: './src/basic.js',
    contact: './src/contact.js',
    damages: './src/damages.js',
    index: './src/index.js',
    gallery: './src/gallery.js',
    style: './src/main.scss'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 500,
    poll: 1000,
    ignored: /node_modules/
  },
  devtool: 'source-maps',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    watchContentBase: true,
    hot: true,
    open: true,
    inline: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['index', 'style'],
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: path.resolve(__dirname, 'dist', 'index.html'),
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['basic', 'style'],
      template: path.resolve(__dirname, 'src', 'carPainting.html'),
      filename: path.resolve(__dirname, 'dist', 'carPainting.html'),
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['basic', 'style'],
      template: path.resolve(__dirname, 'src', 'carRental.html'),
      filename: path.resolve(__dirname, 'dist', 'carRental.html'),
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['basic', 'style'],
      template: path.resolve(__dirname, 'src', 'about.html'),
      filename: path.resolve(__dirname, 'dist', 'about.html'),
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['gallery', 'style'],
      template: path.resolve(__dirname, 'src', 'gallery.html'),
      filename: path.resolve(__dirname, 'dist', 'gallery.html'),
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['basic', 'style'],
      template: path.resolve(__dirname, 'src', 'supply.html'),
      filename: path.resolve(__dirname, 'dist', 'supply.html'),
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['damages', 'style'],
      template: path.resolve(__dirname, 'src', 'damages.html'),
      filename: path.resolve(__dirname, 'dist', 'damages.html'),
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['contact', 'style'],
      template: path.resolve(__dirname, 'src', 'contact.html'),
      filename: path.resolve(__dirname, 'dist', 'contact.html'),
      minify: {
        collapseWhitespace: true
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  { useBuiltIns: 'usage', corejs: { version: 3 } }
                ]
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './images',
              name: '[name].[ext]',
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  }
};
