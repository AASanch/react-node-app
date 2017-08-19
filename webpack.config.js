var path = require("path");

// `CheckerPlugin` is optional. Use it if you want async error reporting.
// We need this plugin to detect a `--watch` mode. It may be removed later
// after https://github.com/webpack/webpack/issues/3460 will be resolved.
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],

        /**
         * NOTE:  TsConfigPathsPlugin doesn't seem to be working.  So we need to add these so that webpack
         * can resolve path aliases.
        */
        alias: {
			"@client": path.resolve(__dirname, "src/client/"),
			"@server": path.resolve(__dirname, "src/server/"),
		}
    },

    entry: [
        "./src/client/index"
    ],

    devtool: 'source-map',

    module: {
        rules: [
        {
            test: /\.tsx?$/,
            exclude: [/node-modules/],
            use: [
                { loader: 'awesome-typescript-loader' },
                { loader: 'tslint-loader' }
            ]
        }]
    },

    plugins: [
        new CheckerPlugin()
    ],

    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
};
