angular.module('ha', ['ngRoute'])
.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/listing', {
			templateUrl: 'partials/listing.html'
		});

		$routeProvider.when('/create', {
			templateUrl: 'partials/new.html'
		});

		$routeProvider.otherwise({
			redirectTo: '/listing'
		});
	}
]);

angular.module('ha').controller('mainController', ['$scope',
	'constants', 'hotelsProvider', 'votingService',
	function($scope, constants, hp, votingService) {
		$scope.greeting = 'Hello EMC2';
		$scope.descLimit = constants.descLimit;
		$scope.maxResults = constants.maxResults;

		$scope.upVote = function(hotel) {
			if (!hotel.rating) {
				hotel.rating = 0;
			}

			hotel.rating++;
		}

		$scope.downVote = function(hotel) {
			votingService.downVote(hotel, true);
		}

		$scope.hotels = hp.getHotels();
	}
])


angular.module('ha').filter('toFeet', function() {
	return function(input) {
		return input * 10.3;
	}
})