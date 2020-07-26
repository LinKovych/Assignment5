(function () {
"use strict";

angular.module('public')
.component('registration', {
  templateUrl: 'src/public/client-sign-up/sign.up.html',
  bindings: {
    client: '<'
  }
});

})();