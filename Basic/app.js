angular.module('ha', []);

angular.module('ha').controller('mainController', ['$scope', 
	'constants', 'hotelsProvider',
	function($scope, constants, hp) {
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
			if (!hotel.rating) {
				hotel.rating = 0;
			}

			hotel.rating--;
		}

		$scope.hotels = hp.getHotels();
	}
])


angular.module('ha').filter('toFeet', function() {
	return function(input) {
		return input * 10.3;
	}
})