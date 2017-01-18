miAppAngular.controller('inicio', function($scope, loginService){
	$scope.logged = loginService.logged;
});