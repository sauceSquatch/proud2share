'use strict';

import { getUniqueID } from './helpers.js'

export default class Navigation {

  constructor(node) {

    let instance, 
        button,
        links,
        id;

    button = $('[aria-controls="' + node.attr('id') + '"]');

    if (!node.is('nav') || !button.length === 1) {
      return undefined;
    }

    links = $('a', node);
    id = getUniqueID('nav');
    
    button
      .attr('aria-controls', id)
      .attr('aria-expanded', false)
      .on('click focusout', (event) => this.toggle(event));

    node
      .attr('id', id)
      .addClass('hidden')
      .before(button)
      .on('click focusin focusout', (event) => this.toggle(event));

    this.node = node;
    this.links = links;
    this.button = button;

  }

  toggle(event) {

    let target = $(event.target),
        activeEl = $(document.activeElement),
        expanding = this.node.is('.hidden');

    switch (event.type) {
      case 'click':
        expanding = target.is(this.button) ? expanding : false;
        break;
      case 'focusin':
        expanding = target.is(this.links);
        break;
      case 'focusout':
        if (this.waitingToToggle) {
          this.waitingToToggle = false;
          expanding = activeEl.is(this.links) || activeEl.is(this.button);
        }
        else {
          this.waitingToToggle = true;
          return setTimeout(() => { this.toggle(event) }, 100);
        }
        break;
    }

    this.button.attr('aria-expanded', expanding);
    this.node.toggleClass('hidden', !expanding);

  }

}