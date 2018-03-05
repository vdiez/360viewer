"use strict";
process.title = 'UI-node';
let http = require('http');
let express = require('express');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let winston = require('winston');
let config = require('./config');

let app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/", express.static('public'));

let server = http.createServer(app);
server.listen(config.port);
server.on("close", () => winston.error("HTTP server closed"));
server.on("error", err => winston.error("HTTP server error: " + err));
server.on("listening", () => winston.info("HTTP server listening"));

