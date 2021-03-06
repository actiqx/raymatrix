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
      .state('about',{
         url: '/about',
        templateUrl: 'template/about.html'
    })
      .state('service',{
         url: '/service',
        templateUrl: 'template/service.html'
    })
        .state('supplier',{
         url: '/supplier',
        templateUrl: 'template/supplier.html'
    })
    .state('contact',{
         url: '/contact',
        templateUrl: 'template/contact.html'
    });
       




    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app');
   
  }

}());
