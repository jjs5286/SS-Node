'use strict';

(function(appConfig) {

  const path = require('path');
  const cookieParser = require('cookie-parser');
  const bodyParser = require('body-parser');
  const session = require('express-session');
  const flash = require('connect-flash');
  const morgan = require('morgan');
  const passport = require('passport');

  // *** load environment variables *** //
  require('dotenv').config();

  appConfig.init = function(app, express) {

    app.set('views', path.join(__dirname, '..', 'views'));
    app.set('view engine', 'ejs');

    if (process.env.NODE_ENV !== 'test') {
      app.use(morgan('dev'));
    }
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(session({
      secret: process.env.SECRET_KEY,
      resave: false,
      saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());
    app.use(express.static(path.join(__dirname, '..', 'public')));

  };

})(module.exports);
