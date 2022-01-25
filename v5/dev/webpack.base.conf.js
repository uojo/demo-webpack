module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: {
    // app: ['../project_src/index.js'],
    app: ['../project_src/tree_shaking.js'],
  },
  output: {
    publicPath: "/dist/",
    filename: "[name].bundle.js",
    clean: true
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" }]
          ]
        }
      }
    }]
  },
  optimization: {
    usedExports: true,
    // sideEffects: false
  },
};