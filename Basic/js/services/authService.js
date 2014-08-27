angular.module('ha').factory('authService', ['$q', '$timeout',
	function($q, $timeout) {

		var deferred = $q.defer();

		$timeout(function() {
			deferred.resolve(true);
		}, 5000);

		return {
			authReady: deferred.promise,
			signIn: function(userName) {
				alert('signed IN !!!' );
			}
		};

	}
])