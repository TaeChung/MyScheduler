const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.static('public'));

app.get('./notes', (req, res)=>{
    res.sendFile(_dirname, 'public/notes.html')
});