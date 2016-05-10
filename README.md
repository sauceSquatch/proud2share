# proud2share

This is the `proud2share.org` site, a pro bono undertaking of the Razorfish central region. The site is a [Node JS](https://nodejs.org) application hosted on [Heroku](https://www.heroku.com) with a [Mongo DB](https://docs.mongodb.org/manual/) instance from mCloud. [Keystone.js](http://keystonejs.com/docs/) is the content management system. All JavaScript, both client and server side, is written in [ECMAScript 6](http://es6-features.org/). Client-side JavaScript is compiled to ECMAScript 5 using [Babel](https://babeljs.io/). HTML is compiled from [Jade](http://jade-lang.com/) templates and the CSS is compiled from [SASS](http://sass-lang.com/).

## File Structure

- lib - server side "classes" and module initializations
- models - content models for the Mongo DB
- public - client-side files, JS and CSS compile here
- routes - application routes and middleware
- src - client-side source SCSS and JS files
- templates - Jade templates
- updates - update scripts for Keystone


## Environment Setup

You must be running Node version 5.10.1. Use Node Version Manager [(NVM)](https://github.com/creationix/nvm) so you can choose your Node version. You also need to be up and running with [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up).

After running `npm install` you will need to set up a `.env` file in the project root that sets your Node environment variables. We intentionally do not include this file in source control as it contains credentials that will be set by Heroku in production. Contact [brad.tippett@razorfish.com](mailto:brad.tippett@razorfish.com) for a copy of the file.

## Developing and Debugging

To start the site in development mode use the command `npm run develop`. When running in development mode nodemon and livereload will be enabled. Nodemon automatically restarts the server when any of the application source changes. Livereload will refresh your browser automatically when you make changes to the CSS or JavaScript.

If you need to debug the application using [Node Inspector](https://github.com/node-inspector/node-inspector) start Node Inspector in a separate terminal window with the command `node-inspector` and then run the project with the command `npm run debug` to enable debugging. You must have [http://127.0.0.1:8080/?port=5858](http://127.0.0.1:8080/?port=5858) open in Chrome so you can manage the debugger.