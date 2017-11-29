const express = require('express');
const morgan = require('morgan');
const env = require('dotenv').config();
const Axios = require('axios');
const omdb = process.env.OMDB_API_KEY;
const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

function movieSearch() {

}

function detailSearch() {

}

app.get('/api/name/:search', (req, res) => {
  console.log('http://www.omdbapi.com/?s=' + req.params.search + '&apikey=' + omdb);
  Axios.get('http://www.omdbapi.com/?s=' + req.params.search + '&apikey=' + omdb)
    .then((result) => {
      res.send(result.data)
    })
    .catch((err) => {
      console.log(err);
    })
})

app.get('/api/id/:search', (req, res) => {
  console.log(req.params.search);
  Axios.get('http://www.omdbapi.com/?i=' + req.params.search + '&apikey=' + omdb)
    .then((result) => {
      res.send(result.data)
    })
    .catch((err) => {
      console.log(err);
    })
})

module.exports = app;
