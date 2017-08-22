const path = require("path");
const common = require("./webpack.config.common.js");

module.exports = {
    ...common,

    entry: [
        "./src/client/index"
    ],

    output: {
        path: path.resolve(__dirname, "/public"),
        filename: "bundle.js"
    },
}
