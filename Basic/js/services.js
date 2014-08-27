
angular.module('ha').value('constants', {
	descLimit: 50,
	maxResults: 50,
	minZero : false
});

angular.module('ha').factory('votingService', ['constants',  function(config){

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

