
angular.module('ha').value('constants', {
	descLimit: 50,
	maxResults: 50,
	minZero : false
});

angular.module('ha').factory('votingService', ['constants', function(config){

	return{
		upVote : function(hotel){
			if (!hotel.rating) {
				hotel.rating = 0;
			}

			hotel.rating++;
		},
		downVote: function(hotel, minZero){
			if (!hotel.rating) {
				hotel.rating = 0;
			}

			if ( config.minZero && hotel.rating === 0){
				return;
			}

			hotel.rating--;
		}
	}
}])

angular.module('ha').factory('hotelsProvider', function(){
	var hotels = [{
			"id": "1",
			"name": "Taj Westend",
			"price": 17000,
			"location": "Race Course Road",
			"imgUrl": "kVIGWsz.jpg",
			"url": "http://www.theleela.com/",
			"availableForBook": false,
			"description": "Incoherently newt hound ",
			"area": 40000
		}, {
			"id": "2",
			"name": "Keys Hotel",
			"price": 8000,
			"location": "Whitefield",
			"imgUrl": "OqJMuy5.jpg",
			"availableForBook": true,
			"description": "Irresolutely and oh across wherever oh goodness more wallaby a some much reindeer octopus overcast howled far far honey tamarin a ouch inventoried distinct wombat egregious deceptive conservative alas.",
			"area": 20000
		}, {
			"id": "3",
			"name": "Leela Palace",
			"price": 20000,
			"location": "Old Airport Road",
			"imgUrl": "qA4PCDl.jpg",
			"availableForBook": true,
			"description": "Llama crab credible wow reproachfully brave apart dived rugged this hey luscious obediently pert taped smug crud learned thus arousingly or jeepers as before pill save jeez cunning jeez some pointed near house imprecise chose.",
			"area": 65000
		}, {
			"id": "4",
			"name": "Oberoi!!!",
			"price": 20000,
			"location": "Whitefield",
			"imgUrl": "qA4PCDl.jpg",
			"availableForBook": true,
			"description": "Llama crab credible wow reproachfully brave apart dived rugged this hey luscious obediently pert taped smug crud learned thus arousingly or jeepers as before pill save jeez cunning jeez some pointed near house imprecise chose.",
			"area": 198000
		}];

	function showHDesc(){

	}

	return {
		getHotels : function(){
			return hotels;
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

})

