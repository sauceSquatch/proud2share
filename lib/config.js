'use strict';

var config = new Map();

config.set('ENVIRONMENT', process.env.ENVIRONMENT);
config.set('PORT', process.env.PORT || 3000);
config.set('COOKIE_SECRET', process.env.COOKIE_SECRET);
config.set('MONGODB_URI', process.env.MONGODB_URI);
config.set('MANDRILL_API_KEY', process.env.MANDRILL_API_KEY);

config.forEach((value, key) => {
  if (value === undefined) {
    throw Error(`The required environment variable \`${key}\` was not found. 
       Make sure that you have the proper key value pairs in your \`.env\` 
       file and that you are running the application with \`npm start\`.
       `);
  }
});

exports = module.exports = config;