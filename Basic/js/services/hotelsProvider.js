angular.module('ha').factory('hotelsProvider',['$http', '$q', function($http, $q){
	
	return {
		getHotels : function(){
			var deferred = $q.defer();
			var promise = $http.get('data/hotels.json');

			promise.then(function(response){
				deferred.resolve(response.data.hotels);
			})

			return deferred.promise;
		},
		addHotel : function(hotel){
			hotels.push(hotel);
		},
		getHotel : function(hotelId){
			var targetHotel;
			angular.forEach(hotels, function(item){
				if ( item.id === hotelId){
					targetHotel = item;
				}
			});

			return targetHotel;
		}
	}

}])

