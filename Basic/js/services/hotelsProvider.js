angular.module('ha').factory('hotelsProvider', ['$http', '$q', 'parseHeaders',
	function($http, $q, parseHeaders) {

		return {
			getHotels: function() {
				var deferred = $q.defer();

				$http.get('https://api.parse.com/1/classes/hotels', {
					headers: parseHeaders
				}).then(function(response) {
					deferred.resolve(response.data.results);
				})

				return deferred.promise;
			},
			addHotel: function(hotel) {

				$http.post('https://api.parse.com/1/classes/hotels', hotel, {
					headers: parseHeaders
				}).success(function() {
					alert('wooo hooo!')
				});

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