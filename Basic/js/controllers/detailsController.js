angular.module('ha').controller('detailsController', ['$scope',
	'hotelsProvider', '$routeParams',
	function($scope,  hp, $routeParams) {


		console.log('hotel id ' + $routeParams.hotelId);

		hp.getHotel($routeParams.hotelId).success(function(hotel){
			$scope.hotel = hotel;
					$scope.$emit('NAV_TITLE', hotel.name);

		});
	}
])