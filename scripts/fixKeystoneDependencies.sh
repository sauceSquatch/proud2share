#!/bin/bash

[ ! -d ./node_modules/keystone/node_modules/babel-core ] && npm install --prefix ./node_modules/keystone babel-core@5.8.25
[ ! -d ./node_modules/keystone/node_modules/babel-plugin-object-assign ] && npm install --prefix ./node_modules/keystone babel-plugin-object-assign@1.2.1
[ ! -d ./node_modules/keystone/node_modules/babelify ] && npm install --prefix ./node_modules/keystone babelify@6.3.0