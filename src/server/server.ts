import * as express from "express";
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});
