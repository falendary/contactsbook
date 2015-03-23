"use strict";
angular.module('ContactsBook', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider', 
		function($routeProvider, $locationProvider) {
			$routeProvider
				.when('/contacts',
				{
					controller: 'ListController',
					templateUrl: 'views/list.html'
				});
			$locationProvider
				.html5mode(true)
				.hashPrefix('!');
		}])
	.run();