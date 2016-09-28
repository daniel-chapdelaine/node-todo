'use strict'

angular
	.module('MeanToDo', ['ngRoute'])
	.config($routeProvider => {
		$routeProvider
			.when('/', {
				controller: 'greet',
				templateUrl: 'partials/greet.html'
			})
			.when('/main', {
				controller: 'main',
				templateUrl: 'partials/main.html'
			})
	})
	.controller('greet', function($scope, $http){
		$http.get('/api/title')
			.then(({data:{title}}) =>
				$scope.title = title)
	})
	.controller('main', function($scope, $http){
		$http.get('/api/title')
			.then(({data:{title}}) =>
				$scope.title = title)
	})
