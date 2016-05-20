'use strict';

var keystone = require('keystone');
 
exports = module.exports = (request, response) => {

  let view = new keystone.View(request, response),
      locals = response.locals;

  locals.title   = 'Donate'
  locals.section = 'donate';
  locals.modules = ['stories'];

  view.render('donate');
    
}