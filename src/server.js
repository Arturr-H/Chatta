//Express framework
const express = require("express");
const app = express();

//Multer for image uploading
const multer = require("multer");

//Cors for third party API requests
const cors = require("cors");
app.use(cors());

//Easier path handling
const path = require("path");

//Read .env files
require("dotenv").config();

//8081 = artur.red no cname
const port = 8081;

//Static files, data & frontend
app.use(express.static(path.resolve("frontend")));
app.use(express.static(path.resolve("data")));


//Routes
app.get("/", (req, res) => {
    res.send("shittting");
});


//Start server
app.listen(port, () => {
    console.log(`Running at ${port}`);
});