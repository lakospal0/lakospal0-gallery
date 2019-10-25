const express = require('express');
const PORT = 3000;
const app = express();

app.use(express.static('static'));
app.set('view engine', 'ejs');

const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, 'pictures');

fs.readdir(directoryPath, function(err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(function(file) {
        // Do whatever you want to do with the file
        console.log(file);
    });
});

app.get('/', function(req, res) {
    res.render('home.ejs', { person: "Guest" });
})

app.listen(PORT);