const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userController = require("../Controllers/user");

app.use(bodyParser.json([]));
app.post("/users", userController.createUser);
app.get("/users", userController.getAllUser);

module.exports = app;
