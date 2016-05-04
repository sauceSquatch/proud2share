'use strict';

var keystone = require('keystone'),
    User = keystone.list('User');
 
exports = module.exports = (done) => {
    
    new User.model({
        name: { first: 'Brad', last: 'Tippett' },
        email: 'brad.tippett@razorfish.com',
        password: 'brad.tippett',
        canAccessKeystone: true
    }).save(done);
    
};