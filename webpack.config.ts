import {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

const config: Configuration = {
  mode: "development",
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.tsx', '.js']
  },
  externals: ['module', 'named-references'],
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'}
      ]
    }, {
      test: /\.[jt]sx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ["@babel/preset-react", {"runtime": "automatic"}],
          "@emotion/babel-preset-css-prop",
          '@babel/preset-typescript'
        ],
        plugins: ["babel-plugin-twin", "babel-plugin-macros"],
      },
      exclude: /node_modules/
    }]
  },
  optimization: {
    minimizer: [
      new (require('terser-webpack-plugin'))({ extractComments: false }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: './bundleContentReport.html'
    })
  ]
}

export default config;
