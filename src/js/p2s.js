'use strict';

import Document   from './lib/document';
import Viewmaster from './lib/viewmaster';
import Navigation from './lib/navigation';

//Views WIP
import RegistrationForm from './views/register';

(($) => {

  if (!window.p2s) {
    window.p2s = {};
  }

  p2s.document   = new Document($(document.documentElement));
  p2s.navigation = new Navigation($('header nav'));
  p2s.viewmaster = new Viewmaster($('main'));

  //Views WIP
  p2s.register = new RegistrationForm($('form.register'));

})(jQuery);