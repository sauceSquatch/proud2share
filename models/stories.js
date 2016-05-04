'use strict';

let keystone = require('keystone'),
    Types = keystone.Field.Types;

let Stories = new keystone.List('Stories', {singular: 'Story'});

Stories.add({
  name: {
    type: Types.Text,
    initial: true,
    required: true,
    index: true
  },
  // image: {
  //   type: Types.CloudinaryImage,
  //   initial: true,
  //   autoCleanup: true,
  //   select: true
  // },
  birthDate: {
    type: Types.Date,
    initial: true,
    required: true
  },
  yearsHomeless: {
    label: 'Years Homeless',
    type: Types.Number,
    initial: true,
    required: true
  },
  shoeLocation: {
    label: 'Shoe Location',
    type: Types.Text,
    initial: true
  },
  content: {
    type: Types.Html,
    initial: true,
    wysiwyg: true
  },
  published: {
    type: Boolean,
    initial: true
  }
});
 
Stories.register();