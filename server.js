// File: server.js

const express = require('express');
const path    = require('path');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// Create our app instance
const app = express();

// Define a route
app.get('/', (req, res) => {
    // Serve the index.html file
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Listen on port 80
app.listen(PORT, HOST);

console.log('Express application started!');
