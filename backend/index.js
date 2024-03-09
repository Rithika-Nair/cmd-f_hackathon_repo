const express = require('express');
const cohere = require('cohere');
const app = express();
const port = 3000;

// example on local port
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// listening on port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});