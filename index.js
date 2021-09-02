const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('express');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// db connect
mongoose.connect('mongodb://localhost/tugas');
const db = mongoose.connection;

const port = 8000;

const apiRouter = require('./api-routes');

app.get('/', (req, res) => {
    res.send("Selamat datang di Tugas 2")
});

app.use('/api', apiRouter);

app.listen(port, ()=> {
    console.log("server berjalan di port $(port)")
})