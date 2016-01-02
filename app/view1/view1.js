'use strict';

var view1Module = angular.module('myApp.view1', ['ngRoute'])

view1Module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'view1/view1.html'})
}])

view1Module.controller('View1Ctrl', function($scope) {
  $scope.number = 0;
  $scope.numArr = [];
  $scope.myarr = [{name: "thien", age: 20},
    {name: "khoa hoc", age: 50},
    {name: "thuy phan", age: 10},
    {name: "thuy foo", age: 16},
    {name: "computer science", age: 100},
    {name: "english", age: 46}];

  $scope.incrementNumber = function() {
    $scope.number++;
  };

  $scope.stopMonitoring = $scope.$watch('number', function() {
    $scope.numArr.push($scope.number);
  });
});

/////////////////////////////////////////////////////////////////////////
// Define a sample filter
view1Module.filter('charLimit', function() {
  return function(input, length) {
    if (!length) {
      length = 10;
    }
    if (!input) {
      return '';
    }
    if (input.length <= length) {
      return input;
    } else {
      return input.substring(0, length) + "...";
    }
  }
})

// Another filter
view1Module.filter('filterByAge', function() {
  return function(data, minage) {
    var filteredArr = [];
    if (!minage) {
      minage = 5;
    }

    for (var i=0; i< data.length; i++) {
      var obj = data[i];
      if (obj.age >= minage)
        filteredArr.push(obj);
    }

    return filteredArr;
  }
})