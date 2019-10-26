const express = require('express');
const PORT = 3000;
const app = express();

app.use(express.static('static'));
app.set('view engine', 'ejs');


const fs = require('fs');

let rawdata = fs.readFileSync('data.json');
let images = JSON.parse(rawdata);
let size = Object.keys(images).length;

app.get('/', function(req, res) {
    res.render('home.ejs', { pictures: images, size: size });
})

app.listen(PORT);