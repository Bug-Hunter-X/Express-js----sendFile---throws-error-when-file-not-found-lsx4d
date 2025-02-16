const express = require('express');
const app = express();
app.get('/', (req, res) => {
  const filePath = __dirname + '/index.html';
  // Check if file exists before attempting to send it
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // File not found, send a 404 response
      res.status(404).send('File not found');
    } else {
      res.sendFile(filePath);
    }
  });
});
const fs = require('node:fs');
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});