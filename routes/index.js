'use strict';

var keystone = require('keystone'),
    routes;

let middleware = require('./middleware'),
    importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.enableAdminRoute);
keystone.pre('routes', middleware.initErrorHandlers);
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);
keystone.pre('render', middleware.initModules);
 
// Handle 404 errors
keystone.set('404', (request, response, next) => response.notfound() );
 
// Handle other errors
keystone.set('500', (error, request, response, next) => {
    let title, message;
    if (error instanceof Error) {
        message = error.message;
        error = error.stack;
    }
    response.error(error, title, message);
});
 
// Load Routes
routes = { views: importRoutes('./views') };
 
// Bind Routes
exports = module.exports = (app) => {

  // Home Page  
  app.get('/', routes.views.index)
  app.get('/donate', routes.views.donate)

}