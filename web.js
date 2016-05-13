'use strict';

const CONFIG = require('./lib/config');

let keystone = require('keystone'),
    compiler = require('./lib/compiler');

keystone.init({
  
  'name': 'proud2share',
  
  'static': ['public'],
  'favicon': 'public/favicon.ico',
  
  'views': 'templates/views',
  'view engine': 'jade',
  
  'mongo': CONFIG.get('MONGODB_URI'),
  'model prefix': 'p2s_',

  'mandrill': CONFIG.get('MANDRILL_API_KEY'),
  
  'env': CONFIG.get('NODE_ENV'),
  'port': CONFIG.get('PORT'),
  'compress': true,
  'session': true,
  'session store': 'connect-mongo',
  'auth': true,
  'user model': 'User',
  'cookie secret': CONFIG.get('COOKIE_SECRET'),
  'auto update': true
  
});

// Configure Cloudinary
keystone.set('cloudinary config', CONFIG.get('CLOUDINARY_URL'));
keystone.set('cloudinary secure', false);

// Compile CSS and JS
compiler.compile('/src/css/', '/public/css/');
compiler.compile('/src/js/', '/public/js/');

// Turn on source watching and Live Reload in development
if (CONFIG.get('NODE_ENV') === 'development') {
  let livereload = require('livereload'),
      reloadServer = livereload.createServer({ exts: ['jade','css','js'], host: 'localhost' });

  console.log('Watching /src/ for changes and auto-compiling to /public/');
  compiler.watch('/src/', '/public/');
  reloadServer.watch([(__dirname + '/public/'),(__dirname + '/templates/')]);
}
 
// Require the content models
require('./models');

// Define the navigation for the admin section of the site
keystone.set('nav', {
  content: ['stories', 'sponsors'],
  users: 'users'
});
 
// Set the available routes
keystone.set('routes', require('./routes'));
 
// Start the server
keystone.start();