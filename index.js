const express = require('express');

const app = express();

let cors = require('cors');

const bodyParser = require('body-parser');


app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended : false}));

app.use(require('./Routes/correoRoutes'));

app.listen('3000', ()=> {
    console.log('escuchando');
})