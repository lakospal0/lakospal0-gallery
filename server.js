const express = require('express');
const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('home.ejs');
})

app.listen(PORT);