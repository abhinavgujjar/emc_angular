angular.module('ha').controller('newController', ['$scope',
	'hotelsProvider',
	function($scope,  hp) {

		$scope.addHotel = function(hotelsForm, hotel){

			if ( hotelsForm.$invalid ){
				alert('not valid');
			}
			console.log(hotel);
		}
		
	}
])

