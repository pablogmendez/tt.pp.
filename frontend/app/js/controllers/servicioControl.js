miAppAngular.controller('servicioControl', function($scope , $location ){

	$scope.registrarse = function() {
		$location.path("/registro");
	}
    
    $scope.premium = function() {
		$location.path("/registro");
	}
});