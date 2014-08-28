angular.module('ha').controller('newController', ['$scope',
	'hotelsProvider', '$location', '$timeout', 
	function($scope,  hp, $location) {

		$scope.$emit('NAV_BAR', false);

		$scope.addHotel = function(hotelsForm, hotel){

			if ( hotelsForm.$invalid ){
				alert('not valid');
			}

			hp.addHotel(hotel);

			$location.url('/listing');
			
		}
		
	}
])

