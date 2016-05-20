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
  //Groundworks form API
  p2s.credentials = {
    theGroundwork: `pub-p2s-test.proud2share--tF2JaIB.LeUBEwwrCTW7CtcNEMqL2zPbdcLHMkFKe9z_8MBNAOWJxI4GLTvl0FsfGHobqB3xLkyVi_EIwQRu9w`
  };

  p2s.gw = new Groundwork({
    apiKey: p2s.credentials.theGroundwork
  });

  p2s.document   = new Document($(document.documentElement));
  p2s.navigation = new Navigation($('header nav'));
  p2s.viewmaster = new Viewmaster($('main'));

  //views WIP
  p2s.register = new RegistrationForm($('form.register'));

})(jQuery);