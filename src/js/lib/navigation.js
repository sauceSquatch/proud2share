'use strict';

export default class Navigation {

  constructor(node) {

    let instance, 
      button;

    if (!node || (node.nodeName !== 'NAV' && !node.is('nav'))) {
      return undefined;
    }
    else {
      node = $(node);
      button = $('<button aria-controls="nav" aria-expanded="false"></button>');
    }

    node.before(button);
    button.on('click', this.toggle);

    this.node = node;
    this.button = button;

  }

  toggle(event) {

    console.log(event);

  }

}