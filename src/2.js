// Create an Express server
const express = require('express');
const app = express();

// Set up a route to handle GET requests to '/hello'
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
