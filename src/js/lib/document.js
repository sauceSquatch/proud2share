'use strict';

export default class Document {

  constructor(node) {

    this.node = node || $(document.documentElement);

  }

  get section() {

    return this.node.data().section;

  }

  set section(section) {

    this.node
      .attr('data-section', section)
      .data('section', section);

    return section;

  }

  get title() {

    return window.document.title;

  }

  set title(title) {

    return window.document.title = title;

  }

  get url() {

    return this.node.data().url;

  }

  set url(url) {

    this.node
      .attr('data-url', url)
      .data('url', url);

    return url;

  }

}