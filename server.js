const express = require("express");
const jsonServer = require("json-server");
const history = require("connect-history-api-fallback");

const app = express();
app.use(history())
app.use("/", express.static("dist"));

const router = jsonServer.router("data.json");
app.use(jsonServer.bodyParser);
app.use("/api", (req, res, next) => router(req, res, next));

const port = process.argv[3] || 4002;
app.listen(port, () => console.log(`Running on port ${port}`))