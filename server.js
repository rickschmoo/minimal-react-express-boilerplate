const express = require('express');
const data = require('./data/data.json');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ payload: data });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
