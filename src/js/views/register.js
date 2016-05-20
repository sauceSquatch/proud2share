'use strict';

import { getUniqueID } from '../lib/helpers.js'

export default class RegistrationForm {

  constructor(node) {

    this.node = node
      .on('submit', (event) => this.submit(event));
  }

  submit(event) {
    event.preventDefault();

    let form = this.node[0];

    // Client side check
    var profileData = {
      email: document.getElementById('register_email').value,
      password: document.getElementById('register_password').value,
      source: "Proud2Share Register Form"
      //confirmPassword: document.getElementById('confirm_password').value
    };

    //console.log(profileData);

    // Sent the form data to the API, this will return a Promise
    // you can handle
    p2s.gw.profiles.create(profileData)
      .then(this.handleSuccess)
      .catch(this.handleErrors);
    
    return false;
  }

  handleSuccess(res) { 
    console.log("success");
  }

  handleErrors(err) {
    console.log(err);
  } 
}