const express = require('express');

const app = express();

let envio = require('../Controllers/correoControllers');

app.post('/envio', envio.envioCorreo);

module.exports = app;