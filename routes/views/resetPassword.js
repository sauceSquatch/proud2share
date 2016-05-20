'use strict';

var keystone = require('keystone');
 
exports = module.exports = (request, response) => {

  let view = new keystone.View(request, response),
      locals = response.locals;

  locals.title   = 'Reset Password'
  locals.section = 'resetPassword';

  view.render('resetPassword');
    
}