miAppAngular.controller('backgroundControl', function($scope, $location) {


         $scope.$on('$locationChangeSuccess', function(/* EDIT: remove params for jshint */) {
	        var path = $location.path();
	        //EDIT: cope with other path
	        if ( path==='/' || path==='/login') {
	        	$scope.clase = "full_login";
	        } 
	        else if ( path==='/registro') {
				$scope.clase = "full_registro";
	        } 
	        else if ( path==='/contacto') {
	        	$scope.clase = "full_contacto";
	        } 
	        else if ( path==='/servicios') {
				$scope.clase = "full_servicios";
	        } 
	        else if ( path==='/acercade') {
				$scope.clase = "full_acercade";
	        } 
	        else {
				$scope.clase = "full_login";
	        }        
    });
})