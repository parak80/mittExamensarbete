module.exports = {
  entry: './app/main.js',
  output: {
    path: './app',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './app',
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel'
// {
//        test: /\.css$/,
//         use: [
//           { loader: 'style-loader' , options: { base: 1000}},
//           'css-loader'
//         ],
//       },
      }
    ]
  }
};


