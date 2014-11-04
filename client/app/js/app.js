'use strict';


// Declare app level module which depends on filters, and services
angular.module('scriptRunnerApp', [
  'ngResource',
  'ngRoute',
  /*'myApp.filters',
  'myApp.services',
  'myApp.directives',*/
  'scriptRunnerApp.controllers',
  'ngSanitize' /*,
  'ngAnimate' */
]).
config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
  
  $routeProvider.when('/', {templateUrl: 'partials/welcome.html', controller: 'WelcomeController'});
  $routeProvider.when('/:scriptId', {templateUrl: 'partials/execute.html', controller: 'ExecutionController'});
  $routeProvider.otherwise({redirectTo: '/'}); // always the main section 
}]);

