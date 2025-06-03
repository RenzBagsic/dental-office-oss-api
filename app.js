const express = require('express');
const { MongoClient } = require('mongodb');
const run = require('./app/config/mongodb');

// Use a local MongoDB URI for development or ensure your DNS is correct for Atlas
const app = express();

app.use(express.json());

app.use(function (_req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
    next();
});

run()

app.use('/', require('./app/main/main'));
app.use('/api', require('./app/controllers/index.controller'));


module.exports = app;