const createHapiServer = require('./hapi');
const createExpressServer = require('./express');
const createKoaServer = require('./koa');

createHapiServer();
createExpressServer();
createKoaServer();
