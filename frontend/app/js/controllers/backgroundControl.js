miAppAngular.controller('backgroundControl', function($scope, $location) {


         $scope.$on('$locationChangeSuccess', function(/* EDIT: remove params for jshint */) {
	        var path = $location.path();
	        $scope.back = '';
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
				$scope.clase = "full_app";
				if ( path==='/colorama') {
					$scope.back = 'url(img/colorama_fade_thumb.png)';
				}
				if ( path==='/asociaformas') {
					$scope.back = 'url(img/asociaformas_fade_thumb.png)';
				}
				if ( path==='/completafrases') {
					$scope.back = 'url(img/completafrases_fade_thumb.png)';
				}
				if ( path==='/idobjetos') {
					$scope.back = 'url(img/idobjetos_fade_thumb.png)';
				}
				if ( path==='/mueveimagenes') {
					$scope.back = 'url(img/mueveimagenes_fade_thumb.png)';
				}
				if ( path==='/mundodeemociones') {
					$scope.back = 'url(img/mundodeemociones_fade_thumb.png)';
				}
	        }        
    	});
})