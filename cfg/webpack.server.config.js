const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { DefinePlugin } = require('webpack')
require('dotenv').config()

const NODE_ENV = process.env.NODE_ENV

module.exports = {
  target: 'node',
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, '../src/server/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader'],
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new DefinePlugin({
      'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'`,
      'process.env.SECRET': `'${process.env.SECRET}'`,
      'process.env.URI': `'${process.env.URI}'`,
    }),
  ],
}
