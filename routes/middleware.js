'use strict';

var _ = require('underscore'),
    async = require('async'),
    keystone = require('keystone');
 
/**
    Initializes the standard view locals.
    Include anything that should be initialized before route controllers are executed.
*/
exports.initLocals = (request, response, next) => {

  let locals = response.locals;

  locals.environment = (process.env === 'production') ? 'production' : 'development'
  locals.partial = !!request.query.partial || false;
  locals.user = request.user;
  locals.modules = [];

  next();

};

/**
    Inits the error handler functions into `response`
*/
exports.initErrorHandlers = (request, response, next) => {

  response.err = (err, title, message) => {
    response.status(500).render('errors/500', {
      err: err,
      errorTitle: title,
      errorMsg: message
    });
  };

  response.notfound = (title, message) => {
    response.status(404).render('errors/404', {
      errorTitle: title,
      errorMsg: message
    });
  };

  next();

};

/**
    Fetches and clears the flashMessages before a view is rendered
*/
exports.flashMessages = (request, response, next) => {

  var flashMessages = {
    info: request.flash('info'),
    success: request.flash('success'),
    warning: request.flash('warning'),
    error: request.flash('error')
  };

  response.locals.messages = _.any(flashMessages, (msgs) => msgs.length ) ? flashMessages : false;

  next();

};

/**
    Initialize any modules that will be rendered in the view
*/
exports.initModules = (request, response, next) => {

  let locals = response.locals;

  if (locals.modules && locals.modules.length) {
    async.each(locals.modules, (moduleName, callback) => { require('../lib/moduleInits/' + moduleName)(request, response, callback); }, (error) => next(error));
  }
  else {
    next();
  }

};

/**
    Initialize any modules that will be rendered in the view
*/
exports.enableAdminRoute = (request, response, next) => {

  if (request.url === '/admin') {
    request.url = '/keystone';
  }

  next();

};