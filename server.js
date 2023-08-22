const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 3001

const db = require('./db/db.json');
console.log(db)
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
console.log (__dirname)

fs.readFile('./db/db.json', 'utf8', (error, data) =>
  error ? console.error(error) : console.log(data)
);

//fs.writeFile('log.txt', process.argv[2], (err) =>
//err ? console.error(err) : console.log('Success!')
//);

app.get('/api/notes', (req, res) => {
    //fs.readFile('./db/db.json').then((data) => res.json(JSON.parse(data)));

    res.json (db)
});

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "/public/index.html"))
});

app.get('/notes', (req, res)=>{
    res.sendFile(path.join(__dirname, "/public/notes.html"))
});

app.post('/api/notes', (req, res) => {
    db.push(req.body)
    fs.writeFile('./db/db.json', JSON.stringify(db), (err) =>
err ? console.error(err) : console.log('Success!'))
});

app.listen(
    PORT, () => {console.log("server is running on json", PORT)}
);



//app.get('/api', (req, res) => res.json(termData));