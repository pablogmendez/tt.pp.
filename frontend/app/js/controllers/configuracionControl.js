miAppAngular.controller('configuracionControl', function($scope , $location, $http, userService ){
	$scope.configguardada = false;
	$scope.avatar = "avatar.png";
	
	$scope.nombre		= userService.data.name;
	$scope.direccion	= userService.data.addres;
	$scope.telefono		= userService.data.telnumber;
	$scope.email		= userService.data.email;
	$scope.usuario		= userService.data.user;
	$scope.password		= userService.data.password;
	$scope.repassword	= userService.data.password;


	$scope.validarConfig = function() {
		if($scope.formularioConfig.$valid){
			
			$scope.configguardada = true;
		}
	}
    
    $scope.volver = function() {
		$scope.configguardada = false;
	}
});