angular.module('ha').controller('detailsController', ['$scope',
	'hotelsProvider', '$routeParams',
	function($scope,  hp, $routeParams) {

		console.log('hotel id ' + $routeParams.hotelId);

		$scope.hotel = hp.getHotel($routeParams.hotelId);
	}
])