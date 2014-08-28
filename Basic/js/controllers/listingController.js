/*global angular*/
'use strict';

angular.module('ha').controller('listingController', ['$scope',
	'constants', 'hotelsProvider', 'votingService', '$location', 'authService','$rootScope',

	function($scope, constants, hp, votingService, $location, authService) {

	
		$scope.greeting = 'Hello EMC2';
		$scope.descLimit = constants.descLimit;
		$scope.maxResults = constants.maxResults;

		authService.authReady.then(function() {
			$scope.authReady = true;
		})

		$scope.addToFavorites = function(hotel){
			$scope.$broadcast('ADD_FAV', hotel);
			//$scope.favorites.push(hotel);
		}

		$scope.login = function() {
			promise.then(function() {
				authService.signIn();
			});
		}

		$scope.otherFunction = function() {
			promise.then(function() {
				authService.signIn();
			});
		}

		$scope.upVote = function(hotel) {
			votingService.upVote(hotel);
		};

		$scope.downVote = function(hotel) {
			votingService.downVote(hotel, true);
		};

		$scope.selectHotel = function(hotel) {
			hp.selectedHotel = hotel;

			$location.url('/details');
		};

		$scope.hotels = hp.getHotels();
	}
]);