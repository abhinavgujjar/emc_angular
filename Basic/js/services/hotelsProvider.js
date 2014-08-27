angular.module('ha').factory('hotelsProvider', ['$http', '$q',
	function($http, $q) {

		return {
			getHotels: function() {
				var deferred = $q.defer();
				
				$http.get('data/hotels.json').then(function(response) {
					deferred.resolve(response.data.hotels);
				})

				return deferred.promise;
			},
			addHotel: function(hotel) {
				hotels.push(hotel);
			},
			getHotel: function(hotelId) {
				var deferred = $q.defer();


				this.getHotels().then(function(hotels) {
					var targetHotel;

					angular.forEach(hotels, function(item) {
						if (item.id === hotelId) {
							targetHotel = item;
						}
					});

					deferred.resolve(targetHotel);
				});



				return deferred.promise;
			}
		}

	}
])