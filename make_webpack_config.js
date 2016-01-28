var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.js');
module.exports = function(options) {
  var entry, plugins, devtool;
  if(options.dev) {
    entry = {
      app:path.resolve(__dirname, 'src/index.js'),
      vendors: ['react']
    };
    plugins = [
    ];
    devtool= 'eval-source-map';
  } else {
    entry = {
      app: path.resolve(__dirname, 'src/app.js'),
      vendors: ['react']
    };
    plugins = [
    ];
  }
  return {
    devtool: devtool,
    entry: entry,
    resolve: {
      alias: {
        ComponentEnhance: path.resolve(__dirname, 'src/enhances/component_enhance'),
        styles: path.resolve(__dirname, 'src/styles')
      }
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          loader: ["babel-loader"],
          query: {
            presets:['react', 'es2015', 'stage-0']
          },
          exclude: [node_modules],
          include: [path.join(__dirname, 'src')]
        }
      ],
      noParse: [pathToReact]
    },
    plugins: plugins
  };
};
