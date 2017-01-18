miAppAngular.controller('loginControl', function($scope , $location, loginService ){
    $scope.usuarioOk = true;
    $scope.passwordOk = true;

	$scope.validarLogin = function() {
		if($scope.formularioLogin.$valid){
			loginService.logged = true;
			$location.path("/home");
		}
	}

	$scope.registrarse = function () {
		$location.path("/registro")
	}
    
});