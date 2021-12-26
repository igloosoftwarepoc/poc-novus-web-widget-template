const remoteComponentConfig = require("./remote-component.config.js").resolve;

const externals = Object.keys(remoteComponentConfig).reduce(
  (obj, key) => ({ ...obj, [key]: key }),
  {}
);

module.exports = {
	entry: './src/index.js',
	externals,
	output: {
		filename: 'bundle.js',
		libraryTarget: 'commonjs-module'
	},
	module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};