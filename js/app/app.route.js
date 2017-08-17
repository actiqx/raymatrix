(function () {
  'use strict';

  angular
    .module('app')
    .config(configApp)

  configApp.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configApp($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
       
        templateUrl: 'template/home.html'
       

      })
    .state('service',{
         url: '/service',
        templateUrl: 'temolate/service.html'
    });
       




    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app');
   
  }

}());
