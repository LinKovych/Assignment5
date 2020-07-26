(function () {
"use strict";

angular.module('public')
.component('info', {
  templateUrl: 'src/public/client-sign-up/info.html',
  bindings: {
    client: '<'
  }
});

})();
