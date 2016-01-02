'use strict';

var view3Module = angular.module('myApp.view3', ['ngRoute']);

view3Module.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/view3', {
		templateUrl: 'view3/view3.html'
	});
}]);

view3Module.controller('View3Ctrl', function($scope, $http) {
	$scope.applePhoto = { url: "image/apple.jpg",
		caption: "This is an apple",
		width: "502px",
		height: "335px"
	};

	$scope.otherPhotos = [{url: "image/apple.jpg",
		caption: "This is a girl",
		width: "502px",
		height: "335px"
		},
		{ url: "image/lady.jpg",
			caption: "This is a woman",
			width: "500px",
			height: "500px"}];
});

// Define a custom HTML control to display an image with its caption
view3Module.directive('photo', function() {
	return {
		restrict: 'AEC',
		templateUrl: "view3/photo_template.html",
		replace: true,
		scope: {
			width: '=',
			height: '=',
			caption: '=',
			url: '='
		}
	}
});