/*global angular*/
'use strict';

angular.module('ha').controller('favoritesController', ['$scope',

	function($scope) {
		$scope.favorites = [];

		$scope.$on('ADD_FAV', function(event, hotel){
			$scope.favorites.push(hotel);
		})

	}
]);