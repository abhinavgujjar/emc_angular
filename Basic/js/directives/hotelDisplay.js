angular.module('ha').
directive('hotelDisplay', function(){
    return {
        restrict : 'E',
        templateUrl : 'partials/hotelDisplay.html',
        scope: {
        	hotel : '='
        }
    }
})