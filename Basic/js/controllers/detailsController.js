angular.module('ha').controller('detailsController', ['$scope',
	'hotelsProvider', '$routeParams',
	function($scope,  hp, $routeParams) {

		console.log('hotel id ' + $routeParams.hotelId);

		hp.getHotel($routeParams.hotelId).then(function(hotel){
			$scope.hotel = hotel;
		});
	}
])