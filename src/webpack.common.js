const path = require('path');

module.exports = {
  entry: {
    app: './js/app.js',
  },

  // devServer: {
  //   port: 9000
  // },

  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/app.js',
  },
};
