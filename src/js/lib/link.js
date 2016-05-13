'use strict';

export default class Link {

  constructor(node) {

    node.on('click', this.navigate);
    this.node = node;

  }

  navigate(event) {
  
    console.log(event);
    event.preventDefault();
    return false;

  }

}