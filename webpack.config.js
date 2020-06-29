const path = require('path');
const env =
  process.env.NODE_ENV === 'development' ? process.env.NODE_ENV : 'production';

module.exports = {
  watch: env === 'development',
  mode: env,
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "docs"),
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  devServer: {
    historyApiFallback: {
      rewrites: [{
        from: /^\/[a-z]*/,
        to: '/index.html'
      }],
    },
    contentBase: './docs',
    port: 58080,
    open: true,
    inline: true,
  },
  module: {
    rules: [{
        test: /\.(mp4|png|jpg|gif)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'file-loader',
        }, ],
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }, {
          loader: 'ts-loader',

          options: {
            transpileOnly: true,
          },
        }, ],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};