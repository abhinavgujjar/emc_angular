angular.module('ha').
directive('preview', function(){
    return {
        restrict : 'EA',
        templateUrl : 'partials/preview.html',
        scope: {
            comment : '=',
            rows: '@'
        }
    }
})