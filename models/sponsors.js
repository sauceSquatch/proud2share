'use strict';

let keystone = require('keystone'),
    Types = keystone.Field.Types;

let Sponsors = new keystone.List('Sponsors');
 
Sponsors.add({
  name: {
    type: Types.Text,
    initial: true,
    required: true,
    index: true
  },
  url: { 
    type: Types.Url,
    initial: true,
    required: false
  },
  // image: {
  //   type: Types.CloudinaryImage,
  //   initial: true,
  //   autoCleanup: true,
  //   select: true
  // },
  published: {
    type: Boolean,
    initial: true
  }
});
 
Sponsors.register();