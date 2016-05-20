'use strict';

import Document from './document';

let doc;

export default class View {

  constructor(node, url, title, section) {

    if (!node || node.length !== 1) {
      return undefined;
    }

    doc = doc || p2s.document || new Document();

    if (!url) {
      url = doc.url;
    }

    if (!title) {
      title = doc.title;
    }

    if (!section) {
      section = doc.section;
    }

    this.node = node;
    this.section = section;
    this.title = title;
    this.url = url;

  }

  add(insertionPoint) {

    if (!insertionPoint) {
      insertionPoint = p2s.viewmaster.node;
    }

    this.node.appendTo(insertionPoint);
    return this;

  }

  remove() {

    this.node.remove();
    return this;

  }

}