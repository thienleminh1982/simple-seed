'use strict';

var view4Module = angular.module('myApp.view4', ['ngRoute']);

view4Module.config(['$routeProvider', '$provide', function($routeProvider, $provide) {
	$routeProvider.when('/view4', {templateUrl: 'view4/view4.html'});

	// Demo decorator service
	$provide.decorator('anotherFactory', function($delegate) {
		$delegate.reverse = function() {
			$delegate.setData($delegate.getData().split('').reverse().join(''))
		}
		return $delegate
	})

}]);

view3Module.controller('View4Ctrl', function($scope, constService, valService, myFactory, myServiceClass, anotherFactory) {
	// console.log(constService);
	// console.log(valService);
	//console.log(myFactory.getUser()); // access the public method
	//console.log(myFactory.currentUser); // access the private variable
	// console.log(myServiceClass.getData());
	// console.log(myServiceClass.addData(" appended to"));

	// console.log(anotherFactory.getData());
	// console.log(anotherFactory.addData(" appended to"));
	// console.log(anotherFactory.getData());

	$scope.vnConstant = constService.vnexpressName;
	$scope.vnConstantURL = constService.vnexpressUrl;

	$scope.dataFromClass = anotherFactory.getData();
	$scope.dataFromClassReversed = function (inputStr) {
		anotherFactory.setData(inputStr);
		anotherFactory.reverse();
		return anotherFactory.getData();
	}
});

view4Module.constant('constService', {vnexpressName: "the name of vnexpress",
	                                  vnexpressUrl: "http://www.vnexpress.net"});

view4Module.value('valService', function() {
	return "this is a string";
})

view4Module.factory('myFactory', function() {
	var currentUser = {name: "secret_user", age: 150}; // this is considered as private

	return { // these functions are public
		getUser: function() { return currentUser},
		login: function() { return ""},
		logout: function() { return ""}
	};
})

// a class definition
// myApp.service('myServiceClass', function() {
// 	// private variables and methods
// 	var str = "this is internal string"
// 	var addToString = function(newStr) {
// 		str += newStr;
// 		return str;
// 	}

// 	// exposing public methods
// 	this.getData = function() {
// 		return "String contains: " + str;
// 	}

// 	this.addData = addToString
// })

// Create new instance
view4Module.service('myServiceClass', AnotherServiceClass);

// Singleton
view4Module.factory('anotherFactory', function() {
	return new AnotherServiceClass();
});

function AnotherServiceClass() {
	// private variables and methods
	var str = "this is internal string";
	var addToString = function(newStr) {
		str += newStr;
		return str;
	};

	// exposing public methods
	this.setData = function (inputStr) {
		str = inputStr;
	};

	this.getData = function() {
		return str;
	};

	this.addData = addToString
}
