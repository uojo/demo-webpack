module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: {
    // app: '../project_src/dce/context.js',
    // app: '../project_src/entry_tree_shaking.js',
    // app: '../project_src/entry_mixing_module.js',
    // app: '../project_src/entry_cjs_module.js',
    app: '../project_src/entry_es_module.js',
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
            ['@babel/preset-env',
              {
                // targets: "defaults"
                // targets: {
                //   'esmodules': true
                // }
                // targets: "last 2 versions"
                targets: "since 2019"
              }
            ]
          ]
        }
      }
    }]
  },
  optimization: {
    minimize: false,
    // mangleWasmImports: true,
    usedExports: true,
    // sideEffects: false
  },
};