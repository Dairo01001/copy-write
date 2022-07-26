const express = require('express');
const cors = require('cors');

const middleware = require('./utils/middleware');

const app = express();

app.use(cors());
app.use(express.json());
app.use(middleware.allowOrigin);

// Usa todas las rutas que estan en el directorio routes
app.use('/', require('./routes'));

app.use(middleware.unknownEndpoint);    

module.exports = app;