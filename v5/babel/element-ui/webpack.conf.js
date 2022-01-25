module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: {
    app: ['./index.js'],
  },
  output: {
    publicPath: "/dist/",
    filename: "[name].bundle.js",
    clean: true
  },
  externals: {
    vue: 'Vue',
  },
  module: {
    rules: [
      {
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
      },
      {
        test: /\.css$/i,
        use: ["css-loader"],
      },
      // {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'css-loader'
      //   }
      // }
    ]
  },
  optimization: {
    usedExports: true,
    // sideEffects: false
  },
};