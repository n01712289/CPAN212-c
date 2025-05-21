// server.js

const express = require('express');
const app = express();

// Import the routes from routes.js
const routes = require('./routes');

// Set the port number
const PORT = 8000;

// Middleware to handle URL-encoded and JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use the routes for all incoming requests
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
