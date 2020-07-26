(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['client'];
function InfoController(client) {
  var $ctrl = this;

  $ctrl.registered = false;

  $ctrl.client = client;
  
  if (client.firstName !== '') {
    $ctrl.registered = true;
  }

  else {
     $ctrl.registered = false;
  }

}


})();
