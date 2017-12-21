var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    execOnIdle: ["core-js", "./src/exec-on-js.js"]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '.')
  },
  plugins: [],
}
