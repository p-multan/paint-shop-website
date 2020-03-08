const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
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
  plugins: [
    new CleanPlugin.CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new FixStyleOnlyEntriesPlugin(),
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
      template: path.resolve(__dirname, 'src', 'lakiernictwo-samochodowe.html'),
      filename: path.resolve(
        __dirname,
        'dist',
        'lakiernictwo-samochodowe.html'
      ),
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['basic', 'style'],
      template: path.resolve(__dirname, 'src', 'wypozyczalnia-samochodow.html'),
      filename: path.resolve(
        __dirname,
        'dist',
        'wypozyczalnia-samochodow.html'
      ),
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['basic', 'style'],
      template: path.resolve(__dirname, 'src', 'o-nas.html'),
      filename: path.resolve(__dirname, 'dist', 'o-nas.html'),
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['gallery', 'style'],
      template: path.resolve(__dirname, 'src', 'galeria.html'),
      filename: path.resolve(__dirname, 'dist', 'galeria.html'),
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['basic', 'style'],
      template: path.resolve(__dirname, 'src', 'zaopatrzenie-lakierni.html'),
      filename: path.resolve(__dirname, 'dist', 'zaopatrzenie-lakierni.html'),
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['damages', 'style'],
      template: path.resolve(__dirname, 'src', 'szkody-komunikacyjne.html'),
      filename: path.resolve(__dirname, 'dist', 'szkody-komunikacyjne.html'),
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['contact', 'style'],
      template: path.resolve(__dirname, 'src', 'kontakt.html'),
      filename: path.resolve(__dirname, 'dist', 'kontakt.html'),
      minify: {
        collapseWhitespace: true
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
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
        test: /\.pdf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
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
