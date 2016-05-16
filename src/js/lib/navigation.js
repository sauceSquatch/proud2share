'use strict';

import { getUniqueID } from './helpers.js'

export default class Navigation {

  constructor(node) {

    let instance, 
        button,
        id;

    button = $('[aria-controls="' + node.attr('id') + '"]');

    if (!node.is('nav') || !button.length === 1) {
      return undefined;
    }

    id = getUniqueID('nav');
    
    button
      .attr('aria-controls', id)
      .attr('aria-expanded', false)
      .on('click', (event) => this.toggle(event));

    node
      .attr('id', id)
      .addClass('hidden')
      .before(button)
      .on('click', (event) => this.toggle(event));

    this.node = node;
    this.button = button;

  }

  toggle(event) {

    let target = $(event.target),
        expanding = this.node.is('.hidden');

    if (!target.is(this.button)) {
      expanding = false;
    }

    this.button.attr('aria-expanded', expanding);
    this.node.toggleClass('hidden', !expanding);

  }

}