'use strict';

import Link              from './lib/link';
import Navigation        from './lib/navigation';

(($) => {

  window.p2s = window.p2s || {};

  window.p2s.nav = new Navigation($('header nav'));
  window.p2s.links = [];

  $('a').each(function(index, element) {
    window.p2s.links.push(new Link($(element)));
  });

})(jQuery);