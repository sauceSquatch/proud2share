'use strict';

export function Link (node) {
  
  if (!node || node.nodeName !== 'A') {
    return undefined;
  }

  this.node = node;
  this.node.addEventListener('click', (event) => this.navigate(event));

}

Link.prototype.navigate = (event) => {
  
  console.log(event);
  event.preventDefault();
  return false;

};
