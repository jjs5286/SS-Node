(function() {

  'use strict';

  // *** dependencies *** //
  const express = require('express');

  const appConfig = require('./config/main-config.js');
  const routeConfig = require('./config/route-config.js');
  const errorConfig = require('./config/error-config.js');
  const apiConfig = require('./config/api-config.js');

  // *** express instance *** //
  const app = express();

  // *** config *** //
  appConfig.init(app, express);
  apiConfig.init(app);
  routeConfig.init(app);
  errorConfig.init(app);


  module.exports = app;

}());
