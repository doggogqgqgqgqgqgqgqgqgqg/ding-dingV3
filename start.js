const express = require("express");
const app = express();
const { join } = require("path");
const fetch = require("node-fetch")

app.use(express.static(join(__dirname, "/")));

app.listen(300, () => {
  console.log("Online");
});
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "/index.html"));
});

