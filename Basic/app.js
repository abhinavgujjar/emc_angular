angular.module('ha', ['ngRoute', 'ngResource', 'ngSanitize']);


angular.module('ha').config(['$routeProvider',

	function($routeProvider) {
		$routeProvider.when('/listing', {
			templateUrl: 'partials/listing.html',
			controller : 'listingController'
		});

		$routeProvider.when('/details/:hotelId', {
			templateUrl: 'partials/details.html',
			controller : 'detailsController'
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