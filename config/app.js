const express = require('express');
const appConfig = require('./appConfig');

const app = express();

// Configure the app using appConfig
appConfig.configure(app);

module.exports = app;
