
// Example using the http module
const http = require('http');
const express = require('express');
const app = require('./app')

// Create an HTTP server
app.get('/', (req, res) => {
    // Set the response headers

    // Write the response content
    res.send('<h1>Hello, Express.js Server!</h1>');

});

// Specify the port to listen on
const port = process.env.PORT || 3000;

const localServer = http.createServer(app);

// Start the server
localServer.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

