miAppAngular.controller('navegacionControl', function($scope , $location ){
    alert("wwwww");
   $scope.esActivo =  function(rutaActual){
   	
   	console.log($location.path());
       return rutaActual === $location.path();
   }
    
});