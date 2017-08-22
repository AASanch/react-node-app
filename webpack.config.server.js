const path = require("path");
const common = require("./webpack.config.common.js");
const nodeExternals = require('webpack-node-externals');

module.exports = {
    ...common,

    target: "node",
    externals: [nodeExternals()],

    entry: [
        "./src/server/server"
    ],

    output: {
        path: path.resolve(__dirname, "/dist"),
        filename: "server.js"
    },
}
