'use strict';

import Document   from './lib/document';
import Viewmaster from './lib/viewmaster';
import Navigation from './lib/navigation';

(($) => {

  if (!window.p2s) {
    window.p2s = {};
  }

  p2s.document   = new Document($(document.documentElement));
  p2s.navigation = new Navigation($('header nav'));
  p2s.viewmaster = new Viewmaster($('main'));

})(jQuery);