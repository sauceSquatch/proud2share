'use strict';

import { Link } from './lib/link';

(($) => {

  $('a').each((index, element) => {
    new Link(element);
  });

})(jQuery);