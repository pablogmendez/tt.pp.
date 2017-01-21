miAppAngular.controller('registroControl', function($scope , $location, $http, configuracionGlobal){
	$scope.usuarioregistrado = false;

	$scope.validarRegistro = function() {
		if($scope.formularioRegistro.$valid){
			var nuevoUsuario = {
				name: 			$scope.nombre,
				address: 		$scope.direccion,
				telnumber: 		$scope.telefono,
				email: 			$scope.email,
				dateofbirth: 	Date(2020, 0, 14),
				user: 			$scope.usuario,
				password: 		$scope.password,
				premium: 		"",
			}
			if($scope.premium != "") nuevoUsuario.premium = $scope.premium; 

			$http.post(configuracionGlobal.api_url + "user", nuevoUsuario)
			.success(function (data) {
				$scope.usuarioregistrado = true;
		    })
		    .error(function (data) {
			     console.log(data);
		    });
		}
	}
    
    $scope.volver = function() {
		$location.path("/");
	}
});