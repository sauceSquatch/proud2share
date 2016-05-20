'use strict';

import { getUniqueID } from '../lib/helpers.js'

export default class RegistrationForm {

  constructor(node) {

    var gw = new Groundwork({
      apiKey: p2s.credentials.theGroundwork
    });

    node.
      .on('submit', (event) => this.submit(event));
  }

  submit(event) {
    let form = node[0];

    // Must have an email and source!
    if (form.email && form.source) {

      displayMessage('-- Saving information --');

      // Sent the form data to the API, this will return a Promise
      // you can handle
      gw.supporters.create(form)
        .then(handleSuccess)
        .catch(handleError);
      
    console.log("handleError", handleError);

    } else {
      displayMessage('Please enter an email!');
    }
  }
}