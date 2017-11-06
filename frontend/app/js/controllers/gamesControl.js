miAppAngular.controller('gamesControl', function($scope , $location, $http, gameService, userService, configuracionGlobal ){
    if(gameService.game != "") {
    	console.log("Estadistica obtenida: " + gameService.game.global.stats);
    	if(gameService.game.global.stats.loseLevels == -1) {
    		gameService.game.global.stats.loseLevels = 0
    	}
		var nuevaStat = {
			user: 			userService.data.user,
			stat: 		gameService.game.global.stats,
		}

		$http.post(configuracionGlobal.api_url + "stat", nuevaStat)
		.success(function (data) {
			console.log(data);
	    })
	    .error(function (data) {
		     alert(data);
	    });
		

		gameService.game.destroy();
		gameService.game = "";
    }

$scope.play = function(juego) {
	if(juego == 'colorama') {
		$location.path("/colorama");
	}
	else if(juego == 'asociaformas') {
		$location.path("/asociaformas");
	}
	else if(juego == 'completafrases') {
		$location.path("/completafrases");
	}
	else if(juego == 'idobjetos') {
		$location.path("/idobjetos");
	}
	else if(juego == 'mueveimagenes') {
		$location.path("/mueveimagenes");
	}
	else if(juego == 'mundodeemociones') {
		$location.path("/mundodeemociones");
	}
}

});