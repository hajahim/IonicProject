angular.module('ionic-todo.controllers', [])

.controller('homeCtrl', function($scope, $state, countryService){
	$scope.countries = [];
	countryService.getAll().success(function(response) {
		$scope.countries = response;
	}).finally(function() {
        $scope.$broadcast('scroll.refreshComplete');
    });
	$scope.details = function (objet) {
		$state.go("tab.detail", { "code": objet.alpha2Code});
		console.log('the state is '+$state.current);
	};
})

.controller('tabCtrl', function($scope){
})

.controller('detailsCtrl', function($scope, $stateParams, countryService){
    countryService.getByCode($stateParams.code).success(function(response) {
		$scope.detail = response[0];
	});   
})

.controller('voitureCtrl', function($scope){
    $scope.voitures = [];  
});
                                       