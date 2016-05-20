'use strict';

var keystone = require('keystone');
 
exports = module.exports = (request, response) => {

  let view = new keystone.View(request, response),
      locals = response.locals;

  locals.title   = 'Who We Are'
  locals.section = 'who-we-are';
  locals.modules = [];

  view.render('whoWeAre');
    
}
