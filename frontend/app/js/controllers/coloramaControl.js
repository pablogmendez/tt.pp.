miAppAngular.controller('coloramaControl', function($scope , $location ){

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
				
				game.state.add("Boot",boot);
				game.state.add("Preload",preload);
				game.state.add("GameTitle",gameTitle);
				game.state.add("TheGame",theGame);
				game.state.add("LevelSelect",levelSelect);
				game.state.add("PlayLevel",playLevel);
				game.state.add("LevelOne",levelone);
				game.state.add("LevelTwo",leveltwo);
				game.state.add("LevelThree",levelthree);
				game.state.add("LevelFour",levelfour);
				game.state.add("LevelFive",levelfive);
				game.state.add("GameOver",gameOver);
				game.state.start("Boot");

$scope.cerrar = function() {
	game.destroy();
	$location.path("/games");
}    

});