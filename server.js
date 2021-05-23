require("dotenv").config();
require("/data_base/connection");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const mainRoute = require("/routes/mainRoute");


const server = express();
server.use(cors);
server.use(bodyParser.json());
server.use("/", mainRoute);

server.listen(PORT, error => {
    if (error) return console.error(`Error while starting server at port: ${PORT}`);
    console.log(`Server run at: ${HOST}:${PORT}/`)
})
