(function () {
"use strict";

angular.module('common')
.service('ClientService', ClientService);


ClientService.$inject = ['$http', 'ApiPath'];

function ClientService($http, ApiPath) {
  var service = this;

  service.getItems = function () {
    return $http.get(ApiPath + '/menu_items.json').then(function (response) {
        return response.data;
    });
  }

  service.items = service.getItems();

  service.client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    favDish: ''
  };

  service.pushNewClient = function (newClient) {
    return $http.get(ApiPath + '/menu_items.json').then(function (response) {

      service.client = {
        firstName: newClient.firstName,
        lastName: newClient.lastName,
        email: newClient.email,
        phone: newClient.phone,
      };
      
      for (var i = 0; i < response.data.menu_items.length; i++) {
        if (response.data.menu_items[i].short_name === newClient.favDish.toUpperCase()) {
          service.client.favDish = { name: response.data.menu_items[i].name,
                                     pictureUrl: ApiPath + '/images/' + newClient.favDish.toUpperCase() + '.jpg'
                                   };
          console.log(service.client);
          return service.client;
        }
      }

      service.client.favDish = { name: 'No such menu item number exists.', pictureUrl: null };
      
      console.log(service.client);
      return service.client;
    });
  
  };

  service.getClientInfo = function () {
    return service.client;
  };

 

}



})();
