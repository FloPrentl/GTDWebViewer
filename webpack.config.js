var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  devtool:'source-map',
  entry: './index.js',
  output: {
    filename: 'bundleX.js'    
  },
  devServer: {
    contentBase:".",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "X-Content-Type-Options": "nosniff",
      "Content-Security-Policy": "script-src 'self' https://apis.google.com"
    },
    inline: true,
    historyApiFallback: true,
    watch: true,
    port: 8888,
    progress:true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:8888' })
  ],
}
