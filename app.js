const config = require('./utils/config');
const express = require('express');
require('express-async-errors');
const app = express();
const cors = require('cors');

/** Controller routes go here */



const middleware = require('./utils/middleware');


/** if Using MongoDB */
// const mongoose = require('mongoose');
// const logger = require('./utils/logger');

// logger.info('connecting to MongoDB...');

// mongoose
//   .connect(config.MONGODB_URI)
//   .then(() => {
//     logger.info('connected to MongoDB!');
//   })
//   .catch(error => logger.error('error connecting to MongoDB: ', error.message));

app.use(cors());
app.use(express.static('build'));
app.use(express.json());

app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);

/** app.use Control Routers here */

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;