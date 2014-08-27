angular.module('ha', ['ngRoute']);


angular.module('ha').config(['$routeProvider',

	function($routeProvider) {
		$routeProvider.when('/listing', {
			templateUrl: 'partials/listing.html',
			controller : 'listingController'
		});

		$routeProvider.when('/create', {
			templateUrl: 'partials/new.html',
			controller : 'newController'
		});

		$routeProvider.otherwise({
			redirectTo: '/listing'
		});
	}
]);


angular.module('ha').filter('toFeet', function() {
	return function(input) {
		return input * 10.3;
	}
})