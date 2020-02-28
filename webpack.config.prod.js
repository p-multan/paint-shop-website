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
