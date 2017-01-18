miAppAngular.controller('registroControl', function($scope , $location ){
	$scope.usuarioregistrado = false;

	$scope.validarRegistro = function() {
		if($scope.formularioRegistro.$valid){
			$scope.usuarioregistrado = true;
		}
	}
    
    $scope.volver = function() {
		$location.path("/");
	}
});