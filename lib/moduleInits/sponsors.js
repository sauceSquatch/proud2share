'use strict';

var keystone = require('keystone');
 
exports = module.exports = (request, response, callback) => {
    
    let Sponsors = keystone.list('Sponsors');
    Sponsors.model.find({ published: true }).lean().exec((error, results) => {

      response.locals.sponsors = results;
      callback();
      
    });
    
}