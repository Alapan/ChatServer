const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, '/../dist')));
app.use(express.static(path.join(__dirname, '/../client')))

mongoose.connect(
  'mongodb://127.0.0.1:27017/test',
  { useNewUrlParser: true }
);

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/index.html'));
});

const modules = [
  'message'
]

modules.map((module) => require(`./${module}.js`)(app));
