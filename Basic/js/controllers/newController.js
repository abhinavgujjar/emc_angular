angular.module('ha').controller('newController', ['$scope',
	'hotelsProvider', '$location', '$timeout', 
	function($scope,  hp, $location) {

		$scope.addHotel = function(hotelsForm, hotel){

			if ( hotelsForm.$invalid ){
				alert('not valid');
			}

			hp.addHotel(hotel);

			$location.url('/listing');
			
		}
		
	}
])

