require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/login", (req, res) => {
  res.send("<h1>please! login.</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Server listing on Port ${PORT}`);
});
