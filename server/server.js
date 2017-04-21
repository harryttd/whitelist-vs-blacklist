'use strict';

const express = require('express'),
      bodyParser = require('body-parser'),
      chalk = require('chalk'),
      { resolve } = require('path'),
      { entityEncoder, numericalEncoder } = require('../utils/encoder'),
      { blacklist } = require('../utils/blacklist');

const app = express();

app
  .use(
    require('volleyball'), // http logging middleware
    bodyParser.urlencoded({ extended: true }), bodyParser.json(),
    express.static(resolve(__dirname, '..', 'public'))
  )
  // .get('/', (req, res, next) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))
  .get('*', (req, res, next) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))
  .post('/', (req, res, next) => {
    const { list, encode, selectedOptions } = req.body;
    let { input } = req.body;
    const validators = Object.values(blacklist).filter(func => selectedOptions.includes(func.title));

    validators.forEach(func => input = func(input));

    if (encode) res.send(entityEncoder.htmlEncode(input));
    else res.send(input);
  });

app.listen(3000, () => console.log(chalk.green('The server is listening on port 3000!')));
