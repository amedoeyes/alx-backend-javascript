const express = require('express');

const PORT = 1245;
const HOST = 'localhost';
const app = express();

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, HOST);

module.exports = app;
