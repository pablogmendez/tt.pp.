miAppAngular.controller('HeaderCtrl', function($scope, $location, gameService) {
    $scope.$on('$locationChangeSuccess', function(/* EDIT: remove params for jshint */) {
        var path = $location.path();
        $scope.route = path;
        //EDIT: cope with other path
        //$scope.templateUrl = (path==='/' || path==='/login' || path==='/registro' || path==='/contacto' || path==='/servicios' || path==='/acercade') ? 'templates/header4login.html' : 'templates/header4dashboard.html' ;
        if(path==='/' || path==='/login' || path==='/registro' || path==='/contacto' || path==='/servicios' || path==='/acercade') {
        	$scope.templateUrl = 'templates/header4login.html';
        } else if (path==='/home' || path==='/games' || path==='/settings' || path==='/statistics') {
        	$scope.templateUrl = 'templates/header4dashboard.html';
        } else {
			$scope.templateUrl = 'templates/header4games.html';
        }
        console.log($scope.route);
        if(gameService.game != "") {
			gameService.game.destroy();
			gameService.game = "";
        }
    });
})