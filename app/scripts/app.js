'use strict';

/**
 * @ngdoc overview
 * @name gufufu2015App
 * @description
 * # gufufu2015App
 *
 * Main module of the application.
 */
angular
  .module('gufufu2015App', [
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
