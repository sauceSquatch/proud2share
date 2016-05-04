'use strict';

var keystone = require('keystone');
 
exports = module.exports = (request, response, callback) => {
    
    let Stories = keystone.list('Stories');
    Stories.model.find({ published: true }).lean().exec((error, results) => {

      response.locals.stories = results;

      for (let story of response.locals.stories) {
        story.age = Math.floor((new Date() - story.birthDate) / (1000 * 60 * 60 * 24 * 365));
      }

      callback();
      
    });
    
}