const express = require('express');
const {APPINDEX, APPPORT} = require('./config');
const app = express();

app.use(express.static('public'));

app.get('/', (request, reponse)=>{
    reponse.redirect('index.html');
});

app.listen(APPPORT, err=>console.log(err?err:APPINDEX));
