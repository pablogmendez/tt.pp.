miAppAngular.controller('idobjetosControl', function($scope , $location, gameService  ){

var game = new Phaser.Game(320, 480, Phaser.CANVAS, "game");
				game.global = {
				thumbRows : 5,
				// number of thumbnail cololumns
				thumbCols : 4,
				// width of a thumbnail, in pixels
				thumbWidth : 64,
				// height of a thumbnail, in pixels
				thumbHeight : 64,
				// space among thumbnails, in pixels
				thumbSpacing : 8,
				// array with finished levels and stars collected.
				// 0 = playable yet unfinished level
				// 1, 2, 3 = level finished with 1, 2, 3 stars
				// 4 = locked
				starsArray : [0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
				// level currently playing
				level : 0,
				score : 0,
				alpha : 0.5,
				timer : 10000
			}
				
				game.state.add("Boot",boot_idobjetos);
				game.state.add("Preload",preload_idobjetos);
				game.state.add("GameTitle",gameTitle_idobjetos);
				game.state.add("LevelSelect",levelSelect_idobjetos);
				
				game.state.add("LevelOne",levelone_idobjetos);
				game.state.add("LevelTwo",leveltwo_idobjetos);
				game.state.add("LevelThree",levelthree_idobjetos);
				game.state.add("LevelFour",levelfour_idobjetos);
				game.state.add("LevelFive",levelfive_idobjetos);
				game.state.add("GameOver",gameOver_idobjetos);
				game.state.start("Boot");
				gameService.game = game;
				
$scope.cerrar = function() {
	game.destroy();
	$location.path("/games");
}    

});