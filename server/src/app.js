const express = require('express');
const handlerError = require('./server/handlerError/handler');
const router = require('./server/router');
const cors = require('cors');

const app = express();

const appFunc = ()=>{
  app.use(cors());
  app.use(express.json());
  app.use('/public', express.static('public'));
  app.use('/api', router);
  app.use(handlerError);
  return app
};

module.exports = appFunc;