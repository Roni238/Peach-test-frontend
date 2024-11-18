const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin;
const CopyPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  process.env.VUE_APP_BASE_URL = isProduction ? process.env.VUE_APP_BASE_URL : '/'
  const publicPath = process.env.VUE_APP_BASE_URL 
  
  return {
    entry: './src/main.js',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.[contenthash].js',
      publicPath: publicPath,
    },

    mode: isProduction ? 'production' : 'development',

    devServer: {
      static: {
        directory: path.resolve(__dirname, 'public'),
      },
      historyApiFallback: true,
      open: true,
      hot: true,
      port: 8080,
    },

    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.css$/,
          use: ['vue-style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/images/[hash][ext][query]',
          },
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
          type: 'asset/resource',
          generator: {
            filename: 'assets/fonts/[hash][ext][query]',
          },
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
            test: /\.scss$/,
            use: [
              'vue-style-loader',
              'css-loader',
              {
                loader: 'sass-loader',
                options: {
                  additionalData: `
                    @import "@/scss/variables.scss";
                    @import "@/scss/global.scss";
                  `
                },
              },
            ]
        }
      ],
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env)
      }),  
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        inject: 'body',
        templateParameters: {
          BASE_URL: publicPath,
        },
      }),
      new VueLoaderPlugin(),
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'public/data'),
            to: path.resolve(__dirname, 'dist/data'),
          },
        ],
      })
    ],

    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm-bundler.js',
        '@': path.resolve(__dirname, 'src'),
      },
      extensions: ['.js', '.vue', '.json'],
      fallback: {
        process: require.resolve('process/browser'),
      }
    },
  };
};
