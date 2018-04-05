'use strict';

const Http = require('http');
const Express = require('express');
const BodyParser = require('body-parser');
const Swaggerize = require('swaggerize-express');
const SwaggerUi = require('swaggerize-ui');
const Path = require('path');

const App = Express();

const Server = Http.createServer(App);

App.use(BodyParser.json());
App.use(BodyParser.urlencoded({
    extended: true
}));

App.use(Swaggerize({
  api: Path.resolve('./config/swagger.json'),
  handlers: Path.resolve('./handlers')
}));

App.use('/api-docs', (req, res) => {
  res.json(require('./config/swagger.json'));
});

App.use('/docs', SwaggerUi({
  docs: '/api-docs'
}));

Server.listen(8000, function () {
  App.swagger.api.host = this.address().address + ':' + this.address().port;
  /* eslint-disable no-console */
  console.log('App running on %s:%d', this.address().address, this.address().port);
  /* eslint-disable no-console */
});
