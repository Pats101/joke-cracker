const path = require('path');

module.exports = {
    mode: 'production', // Set the mode to production
  entry: './script.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output bundle file
    path: path.resolve(__dirname, 'dist') // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use Babel loader for transpiling JavaScript
          options: {
            presets: ['@babel/preset-env'] // Preset for compiling ES6+ syntax
          }
        }
      },
      {
        test: /\.css$/, // Apply this rule to .css files
        use: ['style-loader', 'css-loader'] // Use style-loader and css-loader for handling CSS
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // Serve content from the dist directory
    compress: true, // Enable gzip compression
    port: 9000 // Port number for the dev server
  },
};