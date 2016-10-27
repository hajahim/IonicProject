angular.module('ionic-todo.services', [])

.factory('countryService', function($http) {
	var baseUrl = 'https://restcountries.eu/rest/v1/';
	return {
		getAll: function() {
			return $http.get(baseUrl+'all');
		},
		getByCode: function (countryCode){
            return $http.get(baseUrl+'alpha?codes='+countryCode); 
        }
	};

});
