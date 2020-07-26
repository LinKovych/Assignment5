(function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['ClientService'];
function RegistrationController(ClientService) {
  var $ctrl = this;

  $ctrl.success = false;

  $ctrl.client = {
  	firstName: '',
    lastName: '',
    email: '',
    phone: '',
    favDish: ''
  };

  $ctrl.submit = function () {
  	ClientService.pushNewClient($ctrl.client);
    $ctrl.savedMessage = 'Your information has been saved.';
    $ctrl.success = true;
  };

}


})();
