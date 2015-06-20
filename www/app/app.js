'use strict';

/**
 * @ngdoc overview
 * @name gapFront
 * @description
 * # gapFront
 *
 * Main module of the application.
 */
angular
  .module('gapFront', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/chart', {
        templateUrl: 'views/chart.html',
        controller: 'ChartCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider
  .html5Mode(true);
  });

  // .run(function(Restangular) {
  //   RestangularProvider.setBaseUrl('http://www.google.com');
  //   RestangularProvider.setRequestSuffix('.json');
  // })
