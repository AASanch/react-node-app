const common = require("./../webpack.config.common.js");

module.exports = {
    ...common,

    entry: [
        "./src/client/server"
    ],

    output: {
        path: __dirname + "/dist",
        filename: "server.js"
    },
}
