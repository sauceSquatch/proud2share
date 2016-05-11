'use strict';

let keystone = require('keystone'),
    Types = keystone.Field.Types;

let Stories = new keystone.List('Stories', { map: { name: 'lastName' }, singular: 'Story' });

Stories.add({
  firstName: {
    type: Types.Text,
    initial: true,
    required: true
  },
  lastName: {
    type: Types.Text,
    initial: true,
    required: true,
    index: true
  },
  image: {
    type: Types.CloudinaryImage,
    autoCleanup: true,
    select: true
  },
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

Stories.defaultColumns = 'firstName, lastName';
 
Stories.register();