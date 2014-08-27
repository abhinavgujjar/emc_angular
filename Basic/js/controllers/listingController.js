angular.module('ha').controller('listingController', ['$scope',
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

