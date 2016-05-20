'use strict';

import Document from './document';
import View from './view';

let doc;

export default class Viewmaster {

  constructor(node) {

    if (!window.history.pushState) {
      return undefined;
    }

    doc = doc || p2s.document || new Document();

    let viewNode;

    viewNode = $('.view', node);

    if (viewNode.length !== 1) {
      return undefined;
    }

    doc.node.on('click.viewmaster', 'a', (event) => this.filterClicks(event))

    this.index = window.history.length - 1;
    this.current = new View(viewNode);
    this.views = { [window.location.pathname]: this.current };
    this.history = [];
    this.history[this.index] = this.current;
    this.node = node;

  }

  changeView(newView, newIndex) {

    if (!newIndex) {
      newIndex = window.history.length;
      this.history[newIndex] = newView;
    }

    this.index = newIndex;
    doc.section = newView.section;
    doc.title = newView.title;
    window.history.pushState({ url: newView.url }, '', newView.url);
    this.transitionView(newView);

  }

  filterClicks(event) {

    let link,
        href,
        view,
        target;

    link = $(event.currentTarget);

    if (!link.is('a')) {
      return undefined;
    }

    href = link.attr('href');
    target = link.attr('target') || '_self';

    if (/^https?:\/\//i.test(href) || link.attr('target') !== '_self') {
      return undefined;
    }

    this.loadView(href);

    event.preventDefault();
    return false;

  }

  loadView(url) {

    let view = this.views[url];

    if (view) {
      this.changeView(view);
    }
    else {
      $.get(url, { partial: true })
        .error((request, status, message) => {
          console.error(message);
        })
        .success((response, request) => {

          let content, view;

          content = this.parseResponse(response);

          if (!content.view) {
            return;
          }
          
          view = new View(content.view, url, content.title, content.section);

          this.views[url] = view;
          // this.history.push(view);
          // this.index = this.history.length;
          // window.history.pushState({ url: url, view: view }, '', url);
          this.changeView(view);

        });
    }

    return this;

  }

  parseResponse(response) {

    let elements, section, title, view;
    
    elements = $(response);
    view = elements.filter('.view').first();
    section = elements.filter('meta[itemprop="section"]').attr('content');
    title = elements.filter('meta[itemprop="title"]').attr('content');

    return { section: section, title: title, view: view }

  }

  transitionView(newView) {

    this.current.remove();
    newView.add(this.node);
    this.current = newView;

  }

}