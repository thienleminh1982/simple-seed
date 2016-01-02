'use strict';

var view2Module = angular.module('myApp.view2', ['ngRoute'])

view2Module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
  });
}])

view2Module.controller('View2Ctrl', function($scope, $http) {
// {Name, City, Country}
  $http.get("http://www.w3schools.com/angular/customers.php")
      .then(function (response) {
        $scope.dataCustomers = response.data.records;
      });

  $scope.predicate = 'Name';
  $scope.reverse = true;
  $scope.order = function(predicate) {
    $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
    $scope.predicate = predicate;
  };
})