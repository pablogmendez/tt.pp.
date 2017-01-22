miAppAngular.controller('homeControl', function($scope , $location, $http, configuracionGlobal, userService ){
    $scope.datosUsuario = userService.data;

	$http.get(configuracionGlobal.api_url + "news/")
	.success(function (response) {
    	$scope.news = response;
	})
	.error(function (response) {
		console.log(response);
	});
});