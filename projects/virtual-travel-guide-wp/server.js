const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('/', (req, res) => {
  res.send('working');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(path.join(__dirname + '/client/dist/index.html')));
});
