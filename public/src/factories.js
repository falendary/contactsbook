app
	.factory('Contact', ["$resource", function ($resource)
	{
		return $resource('/rest/contact/:id', {id: '@id'}, {
			'update': { method: 'PUT' }
		});
	}]);