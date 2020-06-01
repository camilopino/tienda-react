const path = require('path');


var config ={
  entry:'./main.js',
  output:{
    path: path.resolve(__dirname, './'),
    filename:'index.js'
  },
  devServer:{
    inline: true,
    port: 4200,
    historyApiFallback: true
  },

  module:{
    loaders:[
      {
        test:/\.jsx?$/,
        loader:'babel-loader',
        exclude: /node_modules/,
        query:{
          presets:['es2015','react']
        }
      },
      {
       test: /\.css$/i,
       use: ['style-loader', 'css-loader'],
     },
     {
       test: /\.(png|jpe?g|gif)$/i,
       use: [
         {
           loader: 'file-loader',
         },
       ]
     }
   ]
  }
};

module.exports = config;
