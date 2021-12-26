const externalsConfig = require("./webpack-externals.config.js").resolve;

const externals = Object.keys(externalsConfig).reduce(
  (obj, key) => ({ ...obj, [key]: key }),
  {}
);

module.exports = {
	entry: './src/index.js',
	externals,
	output: {
		filename: 'bundle.js',
		libraryTarget: 'commonjs'
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