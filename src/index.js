const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const port = 3005;

app.get('/api', (req, res) => {
  const filePath = path.join(__dirname, 'data/records.json');
  fs.readFile(filePath, 'utf-8').then((file) => JSON.parse(file)).then((jsonData) => {
    res.json(jsonData);
  });
});

app.post('/api', (req, res) => {
  res.send('hello world! post');
});

app.delete('/api', (req, res) => {});

app.put('/', (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
