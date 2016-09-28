'use strict'

angular
	.module('MeanToDo', [])
	.controller('main', function($scope, $http){
		$http.get('/api/title')
			.then(({data:{title}}) =>
				$scope.title = title)
	})
