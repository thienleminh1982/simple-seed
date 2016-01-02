'use strict';

// Declare app level module which depends on views, and components
var myAppModule = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.view4',
  'myApp.version'
]);

myAppModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {redirectTo: 'view1'})
}]);
