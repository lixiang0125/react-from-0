const path = require('path'); //eslint-disable-line

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: path.resolve(__dirname, './src/app.tsx'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.(js|jsx|ts|tsx)$/,
      loader: 'babel-loader',
      exclude: /(node_modules|build)/,
    }, {
      test: /\.css$/,
      include: path.src,
      use: [
        'style-loader',
        'css-loader',
      ],
    }, {
      test: /.(scss|sass)$/,
      include: path.src,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoader: 2,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                ['postcss-preset-env'],
              ],
            },
          },
        },
        'sass-loader',
      ],
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '0.0.0.0',
  },
};
