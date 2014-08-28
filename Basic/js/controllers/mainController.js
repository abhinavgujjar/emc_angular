/*global angular*/
'use strict';

angular.module('ha').controller('mainController', ['$scope',

	function($scope) {

		$scope.showNavBar = true;
		$scope.title = 'unknown';

		$scope.$on('NAV_BAR', function(event, show){
			$scope.showNavBar = show;
		})

		$scope.$on('NAV_TITLE', function(event, title){
			$scope.title = title;
		})

	}
]);