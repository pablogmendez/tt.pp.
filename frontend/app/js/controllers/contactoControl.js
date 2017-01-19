miAppAngular.controller('contactoControl', function($scope , $location ){
	$scope.preguntaenviada = false;

	$scope.validarContacto = function() {
		if($scope.formularioContacto.$valid){
			$scope.preguntaenviada = true;
		}
	}
    
    $scope.volver = function() {
		$location.path("/");
	}
});