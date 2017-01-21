miAppAngular.controller('loginControl', function($scope , $location, $http, configuracionGlobal, userService ){
    $scope.usuarioOk = true;
    $scope.passwordOk = true;

	$scope.validarLogin = function() {
		if($scope.formularioLogin.$valid){
			$http.get(configuracionGlobal.api_url + "user/" + $scope.usuario)
			.success(function (response) {
				if(response[0] == null) {
					$scope.usuarioOk = false;
					$scope.passwordOk = true;					
				}
				else if(response[0].password != $scope.password) {
					$scope.usuarioOk = true;
					$scope.passwordOk = false;					
				}
				else {
					userService.data = response[0];
					console.log(userService.data);
					$location.path("/home");					
				}
			})
			.error(function (response) {
				console.log(response);
			});
		}
	}

	$scope.registrarse = function () {
		$location.path("/registro")
	}
    
});