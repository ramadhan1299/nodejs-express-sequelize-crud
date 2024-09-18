require('dotenv').config();
const express = require('express');
const router = require('./routes');
const morgan = require('morgan');
const errorHandler = require('./helper/error-handler');

const port = process.env.PORT || 8001;

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`running in port ${port}`);
});
