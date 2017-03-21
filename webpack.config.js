var webpack = require('webpack');  
module.exports = {  
  entry: [
    "./www/components/App.jsx"
  ],
  output: {
    path: __dirname + '/www/dist',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        exclude: [/node_modules/, /bower_components/]
      }
    ]
  },
    
  plugins: [
  ]
};