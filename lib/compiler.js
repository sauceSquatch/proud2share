'use strict';

const ROOTPATH = __dirname.replace('/lib', '');

var fs = require('fs');

let completionHandler,
    compileCSS,
    compileJS,
    determineType,
    exec,
    isFolder,
    normalizePath;

exec = require('child_process').exec;

/**
    Send any errors from the compilation to the console.
*/
completionHandler = (error, stdout, stderr) => {

  if (error) {
    console.error(error);
  }

};

/**
    Compile SCSS into CSS using node-sass.
*/
compileCSS = () => {

  console.log('Compiling CSS from /src/css/p2s.scss to /public/css/p2s.css');
  if (process.env.NODE_ENV === 'production') {
    exec('./node_modules/node-sass/bin/node-sass --output-style compressed --output ' + ROOTPATH + '/public/css --include-path ' + ROOTPATH + '/src/css ' + ROOTPATH + '/src/css/p2s.scss ' + ROOTPATH + '/public/css/p2s.css', completionHandler);
  }
  else {
    exec('./node_modules/node-sass/bin/node-sass --output-style expanded --source-map true --source-map-contents true --output ' + ROOTPATH + '/public/css --include-path ' + ROOTPATH + '/src/css ' + ROOTPATH + '/src/css/p2s.scss ' + ROOTPATH + '/public/css/p2s.css', completionHandler);
  }

};

/**
    Compile ES6 JavaScript into ES5 JavaScript using Babel.
*/
compileJS = () => {

  console.log('Compiling JS from /src/js/p2s.js to /public/js/p2s.js');
  if (process.env.NODE_ENV === 'production') {
    exec('./node_modules/.bin/browserify ' + ROOTPATH + '/src/js/p2s.js -o ' + ROOTPATH + '/public/js/p2s.js -t [ babelify --presets [ es2015 ] ] -t [uglifyify --no-sourcemap ]', completionHandler);
  }
  else {
    exec('./node_modules/.bin/browserify ' + ROOTPATH + '/src/js/p2s.js -o ' + ROOTPATH + '/public/js/p2s.js -t [ babelify --presets [ es2015 ] ]', completionHandler);
  }

};

/**
    Compile ES6 JavaScript into ES5 JavaScript using Babel.
*/
determineType = (path) => {

  let type;

  if (isFolder(path)) {
    if (/\/css\//i.test(path)) {
      type = 'css';
    }
    else if (/\/js\//i.test(path)) {
      type = 'js';
    }
  }
  else {
    if (/\.s?css$/i.test(path)) {
      type = 'css';
    }
    else if (/\.js$/i.test(path)) {
      type = 'js';
    }
  }

  return type;

};

/**
    Determine if a path is to a folder or a file and return a boolean.
*/
isFolder = (path) => {

  return !/\.(?:[A-z]){2,4}$/.test(path);

};

/**
    Ensures all paths are absolute and that folder paths end with a slash.
*/
normalizePath = (path) => {

  if (path.indexOf(ROOTPATH) !== 0) {
    path = ROOTPATH + path;
  }

  if (isFolder(path) && !/\/$/.test(path)) {
    path = path + '/';
  }

  return path;

};

/**
    The Compiler has an empty constructor.
*/
function Compiler() {}

/**
    The `compiler` method compiles the input file or folder into the output file or folder.
    The `type` argument is optional and will be auto detected if none is specified.
*/
Compiler.prototype.compile = (input, output, type) => {

  input = normalizePath(input);
  output = normalizePath(output);
  
  if (type === undefined) {
    type = determineType(output);
  }

  if (type === 'css') {
    compileCSS();
  }
  else if (type === 'js') {
    compileJS();
  }
  else {
    throw Error('Cannot compile invalid type ' + type);
  }

};

/**
    The `watch` method will initiate compiling when the specified input folder changes.
*/
Compiler.prototype.watch = (input, output) => {

  let recompileOnChange;

  if (input && output) {
    input = normalizePath(input);
    output = normalizePath(output);
  }
  else {
    return undefined;
  }

  recompileOnChange = (event, filename) => {

    if (event !== 'change' || !filename) {
      return undefined;
    }
    
    Compiler.prototype.compile(input + filename, output + filename);

  };

  fs.watch(input, { recursive: true }, recompileOnChange);

};

/**
    We export a Compiler singleton.
*/
exports = module.exports = new Compiler();
