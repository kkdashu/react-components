// Gets called when running npm run serve

var webpack = require('webpack');
var config = require('./webpack.production.config');

webpack(config);
// console.log('Starting server from build folder...\n');

// new WebpackDevServer(webpack(config), { // Start a server
//   publicPath: config.output.publicPath,
//   filename: "bundle.js",
//   contentBase: 'build',
//   lazy: true,
//   historyApiFallback: true,
//   quiet: true // Without logging
// }).listen(9090, '0.0.0.0', function (err, result) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Server started');
//     console.log('Your app is available at http://' + ip.address() + ':9090 on any device in your local network!');
//   }
// });
