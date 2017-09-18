miAppAngular.controller('completafrasesControl', function($scope , $location, gameService  ){

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
				
				game.state.add("Boot",boot_completafrases);
				game.state.add("Preload",preload_completafrases);
				game.state.add("GameTitle",gameTitle_completafrases);
				game.state.add("TheGame",theGame_completafrases);
				game.state.add("LevelSelect",levelSelect_completafrases);
				game.state.add("PlayLevel",playLevel_completafrases);
				game.state.add("LevelOne",levelone_completafrases);
				game.state.add("LevelTwo",leveltwo_completafrases);
				game.state.add("LevelThree",levelthree_completafrases);
				game.state.add("LevelFour",levelfour_completafrases);
				game.state.add("LevelFive",levelfive_completafrases);
				game.state.add("LevelSix",levelsix_completafrases);
				game.state.add("LevelSeven",levelseven_completafrases);
				game.state.add("LevelEigth",leveleigth_completafrases);
				game.state.add("LevelNine",levelnine_completafrases);
				game.state.add("LevelTen",levelten_completafrases);
				game.state.add("LevelEleven",leveleleven_completafrases);
				game.state.add("LevelTwelve",leveltwelve_completafrases);
				game.state.add("LevelThirteen",levelthirteen_completafrases);
				game.state.add("LevelFourteen",levelfourteen_completafrases);
				game.state.add("LevelFifteen",levelfifteen_completafrases);
				game.state.add("LevelSixteen",levelsixteen_completafrases);
				game.state.add("LevelSeventeen",levelseventeen_completafrases);
				game.state.add("LevelEigthteen",leveleigthteen_completafrases);
				game.state.add("LevelNineteen",levelnineteen_completafrases);
				game.state.add("LevelTwenty",leveltwenty_completafrases);
				game.state.add("LevelTwentyone",leveltwentyone_completafrases);
				game.state.add("LevelTwentytwo",leveltwentytwo_completafrases);
				game.state.add("LevelTwentythree",leveltwentythree_completafrases);
				game.state.add("LevelTwentyfour",leveltwentyfour_completafrases);
				game.state.add("LevelTwentyfive",leveltwentyfive_completafrases);
				game.state.add("GameOver",gameOver_completafrases);
				game.state.start("Boot");
				gameService.game = game;
				
$scope.cerrar = function() {
	game.destroy();
	$location.path("/games");
}    

});