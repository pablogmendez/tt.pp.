miAppAngular.controller('configuracionControl', function($scope , $location ){
	$scope.configguardada = false;
	$scope.avatar = "avatar.png";
	$scope.validarConfig = function() {
		if($scope.formularioConfig.$valid){
			
			$scope.configguardada = true;
		}
	}
    
    $scope.volver = function() {
		$scope.configguardada = false;
	}
});