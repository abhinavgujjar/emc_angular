angular.module('ha').factory('hotelsProvider', ['$http', '$q', 'parseHeaders', '$resource',
	function($http, $q, parseHeaders, $resource) {

		var hotelsRef = $resource('https://api.parse.com/1/classes/hotels/:id', null, {
			list: {
				method: 'GET',
				isArray: true,
				headers: parseHeaders,
				transformResponse: function(data) {
					var raw = angular.fromJson(data);
					return raw.results;
				}
			}
		});

		return {
			getHotels: function() {

				// return $http.get('https://api.parse.com/1/classes/hotels', {
				// 	headers: parseHeaders,
				// 	transformResponse: function(data) {
				// 		var raw = angular.fromJson(data);
				// 		return raw.results;
				// 	}
				// });

				var res = hotelsRef.list();

				return res;


			},
			addHotel: function(hotel) {

				$http.post('https://api.parse.com/1/classes/hotels', hotel, {
					headers: parseHeaders
				}).success(function() {
					alert('wooo hooo!')
				});

			},
			getHotel: function(hotelId) {

				return $http.get('https://api.parse.com/1/classes/hotels/' + hotelId, {
					headers: parseHeaders
				});

			}
		}

	}
])