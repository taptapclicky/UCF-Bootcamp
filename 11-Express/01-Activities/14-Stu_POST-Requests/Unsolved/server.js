const express = require('express');

const PORT = 3001;

const app = express();

// TODO: Create a GET method for `/api/reviews` that logs when a user's request has been received
app.get('/api/reviews', (req, res) => {
  res.json(`${req.method} request recieved`);
 
  console.info(`${req.method} request recieved`)
});

// TODO: Create a POST request for `/api/reviews` that logs when a user's request has been received
app.post('/api/reviews', (req, res) => {
  res.json(`${req.method} request recieved`)
});

// TODO: Create a GET request for `api/upvotes` that logs when a user's request has been received
app.get('/api/upvotes', (req, res) => {
  res.json(`${req.method} request recieved to get upvote count`);
  res.json(`${req.method} request recieved to get upvote count`)
});

// TODO: Create a POST request for `api/upvotes` that logs when a user's request has been received
// Your code here

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
