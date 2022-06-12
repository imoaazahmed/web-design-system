const path = require('path');

const isDev = process.env.NODE_ENV;

const modes = {
  PROD: 'production',
  DEV: 'development',
};

module.exports = {
  entry: path.resolve(__dirname, './src/index.ts'),
  devtool: isDev ? 'inline-source-map' : false,
  mode: isDev ? modes.DEV : modes.PROD,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, './src'),
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: {
      name: 'design-system-sass',
      type: 'umd',
    },
    libraryTarget: 'commonjs',
  },
};
