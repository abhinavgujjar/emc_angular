/*global angular*/
'use strict';

angular.module('ha').controller('listingController', ['$scope',
	'constants', 'hotelsProvider', 'votingService', '$location',
	function($scope, constants, hp, votingService, $location) {

		$scope.greeting = 'Hello EMC2';
		$scope.descLimit = constants.descLimit;
		$scope.maxResults = constants.maxResults;

		$scope.upVote = function(hotel) {
			votingService.upVote(hotel);
		};

		$scope.downVote = function(hotel) {
			votingService.downVote(hotel, true);
		};

		$scope.selectHotel = function(hotel){
			hp.selectedHotel = hotel;

			$location.url('/details');
		};

		$scope.hotels = hp.getHotels();
	}
]);