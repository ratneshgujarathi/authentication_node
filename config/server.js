const express = require('express');

const app = express();

// accepting json in body
app.use(express.json());


module.exports = app;
