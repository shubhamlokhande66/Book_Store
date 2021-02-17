const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
        template: 'dist/index.html',
      
    }),
    // new webpack.HotModuleReplacementPlugin(),
],

 resolve: {

        extensions: ["*", ".js", ".jsx", ".css", ".scss",".png",".jpg"],
        alias: {
            "react-dom": "@hot-loader/react-dom",
        },
    },
mode: 'development',
  module: {
    rules: [
        {
          test: /\.(jsx|js)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/,
          use: [
              {
                  loader: 'style-loader'
              },
              {
                  loader: 'css-loader',
                  options: {
                      modules: true,
                      localsConvention: 'camelCase',
                      sourceMap: true
                  }
              }
          ]
      },
   
      {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
    },
        
    ]
    
  },
 
  
};