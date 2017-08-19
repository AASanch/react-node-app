const common = require("./../webpack.config.common.js");

module.exports = {
    ...common,

    entry: [
        "./src/client/index"
    ],

    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
}
