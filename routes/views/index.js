'use strict';

var keystone = require('keystone');
 
exports = module.exports = (request, response) => {

  let view = new keystone.View(request, response),
      locals = response.locals;

  locals.section = 'home';
  locals.modules = ['stories','sponsors'];

  view.render('index');
    
}