miAppAngular.controller('coloramaControl', function($scope , $location, gameService ){
	//gameService.game = "colorama";
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
		starsArray : [0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
		// level currently playing
		level : 0,
		score : 0,
		alpha : 0.5,
		timer : 10000,
		abandon : false,
		startTime : 0,
		finishTime : 0,
		stats : {
			score: 0,
			winLevels: 0,
			loseLevels: 0,
			abandonLevels: 0,
			time: 0,
			stars: 0,
			timestamp: "",
			status: "",
			game: "colorama"
		}
	}
				
	game.state.add("Boot",boot_colorama);
	game.state.add("Preload",preload_colorama);
	game.state.add("GameTitle",gameTitle_colorama);
	game.state.add("TheGame",theGame_colorama);
	game.state.add("LevelSelect",levelSelect_colorama);
	game.state.add("PlayLevel",playLevel_colorama);
	game.state.add("LevelOne",levelone_colorama);
	game.state.add("LevelTwo",leveltwo_colorama);
	game.state.add("LevelThree",levelthree_colorama);
	game.state.add("LevelFour",levelfour_colorama);
	game.state.add("LevelFive",levelfive_colorama);
	game.state.add("GameOver",gameOver_colorama);
	game.state.start("Boot");

	gameService.game = game;

$scope.cerrar = function() {
}    

});