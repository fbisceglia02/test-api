
const express = require('express');
const app = express();

// Define your array of values
const values = ['italia', 'spaghetti', 'mafia'];

// Define a route that returns the array of values
app.get('/api/values', (req, res) => {
  res.json(values);
});

